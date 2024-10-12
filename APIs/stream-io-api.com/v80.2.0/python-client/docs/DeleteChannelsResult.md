# DeleteChannelsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.delete_channels_result import DeleteChannelsResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChannelsResult from a JSON string
delete_channels_result_instance = DeleteChannelsResult.from_json(json)
# print the JSON string representation of the object
print(DeleteChannelsResult.to_json())

# convert the object into a dict
delete_channels_result_dict = delete_channels_result_instance.to_dict()
# create an instance of DeleteChannelsResult from a dict
delete_channels_result_from_dict = DeleteChannelsResult.from_dict(delete_channels_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


