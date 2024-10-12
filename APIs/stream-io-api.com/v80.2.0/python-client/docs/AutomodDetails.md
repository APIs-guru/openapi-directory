# AutomodDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**image_labels** | **List[str]** |  | [optional] 
**message_details** | [**FlagMessageDetails**](FlagMessageDetails.md) |  | [optional] 
**original_message_type** | **str** |  | [optional] 
**result** | [**MessageModerationResult**](MessageModerationResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.automod_details import AutomodDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AutomodDetails from a JSON string
automod_details_instance = AutomodDetails.from_json(json)
# print the JSON string representation of the object
print(AutomodDetails.to_json())

# convert the object into a dict
automod_details_dict = automod_details_instance.to_dict()
# create an instance of AutomodDetails from a dict
automod_details_from_dict = AutomodDetails.from_dict(automod_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


