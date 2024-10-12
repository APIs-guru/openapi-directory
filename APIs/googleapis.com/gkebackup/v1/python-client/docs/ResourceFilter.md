# ResourceFilter

ResourceFilter specifies matching criteria to limit the scope of a change to a specific set of kubernetes resources that are selected for restoration from a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_kinds** | [**List[GroupKind]**](GroupKind.md) | Optional. (Filtering parameter) Any resource subject to transformation must belong to one of the listed \&quot;types\&quot;. If this field is not provided, no type filtering will be performed (all resources of all types matching previous filtering parameters will be candidates for transformation). | [optional] 
**json_path** | **str** | Optional. This is a [JSONPath] (https://github.com/json-path/JsonPath/blob/master/README.md) expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). | [optional] 
**namespaces** | **List[str]** | Optional. (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. If this field is not provided, no namespace filtering will be performed (all resources in all Namespaces, including all cluster-scoped resources, will be candidates for transformation). | [optional] 

## Example

```python
from openapi_client.models.resource_filter import ResourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceFilter from a JSON string
resource_filter_instance = ResourceFilter.from_json(json)
# print the JSON string representation of the object
print(ResourceFilter.to_json())

# convert the object into a dict
resource_filter_dict = resource_filter_instance.to_dict()
# create an instance of ResourceFilter from a dict
resource_filter_from_dict = ResourceFilter.from_dict(resource_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


