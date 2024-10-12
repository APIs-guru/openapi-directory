# MessageStatusBaseUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The charge currency in ISO 4217 format. | [optional] 
**price** | **str** | The charge amount as a stringified number. | [optional] 

## Example

```python
from openapi_client.models.message_status_base_usage import MessageStatusBaseUsage

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusBaseUsage from a JSON string
message_status_base_usage_instance = MessageStatusBaseUsage.from_json(json)
# print the JSON string representation of the object
print(MessageStatusBaseUsage.to_json())

# convert the object into a dict
message_status_base_usage_dict = message_status_base_usage_instance.to_dict()
# create an instance of MessageStatusBaseUsage from a dict
message_status_base_usage_from_dict = MessageStatusBaseUsage.from_dict(message_status_base_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


