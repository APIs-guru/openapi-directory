# Updates

The updates profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdatesProperties**](UpdatesProperties.md) |  | [optional] 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

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


