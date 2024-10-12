# CorridorOut

Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_last_name_diasporaed_out** | [**FirstLastNameDiasporaedOut**](FirstLastNameDiasporaedOut.md) |  | [optional] 
**first_last_name_gendered_out** | [**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md) |  | [optional] 
**first_last_name_origined_out** | [**FirstLastNameOriginedOut**](FirstLastNameOriginedOut.md) |  | [optional] 
**id** | **str** |  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.corridor_out import CorridorOut

# TODO update the JSON string below
json = "{}"
# create an instance of CorridorOut from a JSON string
corridor_out_instance = CorridorOut.from_json(json)
# print the JSON string representation of the object
print(CorridorOut.to_json())

# convert the object into a dict
corridor_out_dict = corridor_out_instance.to_dict()
# create an instance of CorridorOut from a dict
corridor_out_from_dict = CorridorOut.from_dict(corridor_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


