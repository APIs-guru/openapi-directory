# WhatsApp1Usage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The charge currency in ISO 4217 format. | [optional] 
**price** | **str** | The charge amount as a stringified number. For WhatsApp this is the default Vonage charge per conversation. | [optional] 

## Example

```python
from openapi_client.models.whats_app1_usage import WhatsApp1Usage

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsApp1Usage from a JSON string
whats_app1_usage_instance = WhatsApp1Usage.from_json(json)
# print the JSON string representation of the object
print(WhatsApp1Usage.to_json())

# convert the object into a dict
whats_app1_usage_dict = whats_app1_usage_instance.to_dict()
# create an instance of WhatsApp1Usage from a dict
whats_app1_usage_from_dict = WhatsApp1Usage.from_dict(whats_app1_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


