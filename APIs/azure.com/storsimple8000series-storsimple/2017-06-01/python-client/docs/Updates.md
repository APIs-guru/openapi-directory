# Updates

The updates profile of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdatesProperties**](UpdatesProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.updates import Updates

# TODO update the JSON string below
json = "{}"
# create an instance of Updates from a JSON string
updates_instance = Updates.from_json(json)
# print the JSON string representation of the object
print(Updates.to_json())

# convert the object into a dict
updates_dict = updates_instance.to_dict()
# create an instance of Updates from a dict
updates_from_dict = Updates.from_dict(updates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


