# CorridorIn

Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_last_name_geo_from** | [**FirstLastNameGeoIn**](FirstLastNameGeoIn.md) |  | [optional] 
**first_last_name_geo_to** | [**FirstLastNameGeoIn**](FirstLastNameGeoIn.md) |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.corridor_in import CorridorIn

# TODO update the JSON string below
json = "{}"
# create an instance of CorridorIn from a JSON string
corridor_in_instance = CorridorIn.from_json(json)
# print the JSON string representation of the object
print(CorridorIn.to_json())

# convert the object into a dict
corridor_in_dict = corridor_in_instance.to_dict()
# create an instance of CorridorIn from a dict
corridor_in_from_dict = CorridorIn.from_dict(corridor_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


