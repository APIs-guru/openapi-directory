# MessageStatusUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The charge currency in ISO 4217 format. | [optional] 
**price** | **str** | The charge amount as a stringified number. | [optional] 

## Example

```python
from openapi_client.models.message_status_usage import MessageStatusUsage

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusUsage from a JSON string
message_status_usage_instance = MessageStatusUsage.from_json(json)
# print the JSON string representation of the object
print(MessageStatusUsage.to_json())

# convert the object into a dict
message_status_usage_dict = message_status_usage_instance.to_dict()
# create an instance of MessageStatusUsage from a dict
message_status_usage_from_dict = MessageStatusUsage.from_dict(message_status_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


