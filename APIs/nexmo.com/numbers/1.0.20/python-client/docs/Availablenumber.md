# Availablenumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **str** | The monthly rental cost for this number, in Euros | [optional] 
**country** | **str** | The two character country code in ISO 3166-1 alpha-2 format | [optional] 
**features** | **List[str]** | The capabilities of the number: &#x60;SMS&#x60; or &#x60;VOICE&#x60; or &#x60;SMS,VOICE&#x60; or &#x60;SMS,MMS&#x60; or &#x60;VOICE,MMS&#x60; or &#x60;SMS,MMS,VOICE&#x60; | [optional] 
**msisdn** | **str** | An available inbound virtual number. | [optional] 
**type** | **str** | The type of number: &#x60;landline&#x60;, &#x60;landline-toll-free&#x60; or &#x60;mobile-lvn&#x60; | [optional] 

## Example

```python
from openapi_client.models.availablenumber import Availablenumber

# TODO update the JSON string below
json = "{}"
# create an instance of Availablenumber from a JSON string
availablenumber_instance = Availablenumber.from_json(json)
# print the JSON string representation of the object
print(Availablenumber.to_json())

# convert the object into a dict
availablenumber_dict = availablenumber_instance.to_dict()
# create an instance of Availablenumber from a dict
availablenumber_from_dict = Availablenumber.from_dict(availablenumber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


