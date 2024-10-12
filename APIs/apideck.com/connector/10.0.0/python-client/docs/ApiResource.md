# ApiResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the resource, typically a lowercased version of name. | [optional] 
**linked_resources** | [**List[ApiResourceLinkedResourcesInner]**](ApiResourceLinkedResourcesInner.md) | List of linked resources. | [optional] 
**name** | **str** | Name of the resource (plural) | [optional] 
**var_schema** | **object** | JSON Schema of the resource in our Unified API | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_resource import ApiResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResource from a JSON string
api_resource_instance = ApiResource.from_json(json)
# print the JSON string representation of the object
print(ApiResource.to_json())

# convert the object into a dict
api_resource_dict = api_resource_instance.to_dict()
# create an instance of ApiResource from a dict
api_resource_from_dict = ApiResource.from_dict(api_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


