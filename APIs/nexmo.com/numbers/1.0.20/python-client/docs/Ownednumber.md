# Ownednumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The two character country code in ISO 3166-1 alpha-2 format | [optional] 
**features** | **List[str]** | The capabilities of the number: &#x60;SMS&#x60; or &#x60;VOICE&#x60; or &#x60;SMS,VOICE&#x60; or &#x60;SMS,MMS&#x60; or &#x60;VOICE,MMS&#x60; or &#x60;SMS,MMS,VOICE&#x60; | [optional] 
**messages_callback_type** | **str** | The messages webhook type: always &#x60;app&#x60; | [optional] 
**messages_callback_value** | **str** | An Application ID | [optional] 
**mo_http_url** | **str** | The URL of the webhook endpoint that handles inbound messages | [optional] 
**msisdn** | **str** | An available inbound virtual number. | [optional] 
**type** | **str** | The type of number: &#x60;landline&#x60;, &#x60;landline-toll-free&#x60; or &#x60;mobile-lvn&#x60; | [optional] 
**voice_callback_type** | **str** | The voice webhook type: &#x60;sip&#x60;, &#x60;tel&#x60;, or &#x60;app&#x60; | [optional] 
**voice_callback_value** | **str** | A SIP URI, telephone number or Application ID | [optional] 

## Example

```python
from openapi_client.models.ownednumber import Ownednumber

# TODO update the JSON string below
json = "{}"
# create an instance of Ownednumber from a JSON string
ownednumber_instance = Ownednumber.from_json(json)
# print the JSON string representation of the object
print(Ownednumber.to_json())

# convert the object into a dict
ownednumber_dict = ownednumber_instance.to_dict()
# create an instance of Ownednumber from a dict
ownednumber_from_dict = Ownednumber.from_dict(ownednumber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


