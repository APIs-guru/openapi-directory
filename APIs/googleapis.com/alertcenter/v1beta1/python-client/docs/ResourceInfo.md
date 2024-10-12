# ResourceInfo

Proto that contains resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | Drive file ID. | [optional] 
**resource_title** | **str** | Title of the resource, for example email subject, or document title. | [optional] 

## Example

```python
from openapi_client.models.resource_info import ResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceInfo from a JSON string
resource_info_instance = ResourceInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceInfo.to_json())

# convert the object into a dict
resource_info_dict = resource_info_instance.to_dict()
# create an instance of ResourceInfo from a dict
resource_info_from_dict = ResourceInfo.from_dict(resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


