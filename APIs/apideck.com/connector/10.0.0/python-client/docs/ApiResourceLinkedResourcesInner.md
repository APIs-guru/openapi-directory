# ApiResourceLinkedResourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the resource, typically a lowercased version of name. | [optional] 
**unified_property** | **str** | Name of the property in our Unified API. | [optional] 

## Example

```python
from openapi_client.models.api_resource_linked_resources_inner import ApiResourceLinkedResourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceLinkedResourcesInner from a JSON string
api_resource_linked_resources_inner_instance = ApiResourceLinkedResourcesInner.from_json(json)
# print the JSON string representation of the object
print(ApiResourceLinkedResourcesInner.to_json())

# convert the object into a dict
api_resource_linked_resources_inner_dict = api_resource_linked_resources_inner_instance.to_dict()
# create an instance of ApiResourceLinkedResourcesInner from a dict
api_resource_linked_resources_inner_from_dict = ApiResourceLinkedResourcesInner.from_dict(api_resource_linked_resources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


