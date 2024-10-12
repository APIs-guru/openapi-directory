# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**po_box** | **str** | Post office box, Boite postale, Casilla de Correo,... | [optional] 
**po_box_agency** | **str** | Agency where the office box, Boite postale, Casilla de Correo is | [optional] 
**po_box_info** | **str** | extra info on post office box, Boite postale, Casilla de Correo,.. | [optional] 
**adm1_name_alternates_localized** | **Dict[str, List[str]]** |  | [optional] 
**adm2_name_alternates_localized** | **Dict[str, List[str]]** |  | [optional] 
**block** | **str** | The block in an address (Brasilia only) the block in austria, singapore,... address | [optional] 
**city** | **str** | The city or locality, a small town or village name sometimes is included in an address when the Delivery Point is outside the boundary of the main Post Town that serves it. | [optional] 
**city_subdivision** | **str** | A sub division of a city | [optional] 
**civic_number_suffix** | **str** | The number that follows the house number (Canada only) | [optional] 
**confidence** | **str** | An indicator that mesure how the parser is confident for the result | [optional] 
**country** | **str** | The country name | [optional] 
**country_name_alternates_localized** | **Dict[str, List[str]]** |  | [optional] 
**countrycode** | **str** | The countrycode given in the request | [optional] 
**dependent_locality** | **str** | &#39;Sub&#39; city atached to a big city | [optional] 
**distance** | **float** | The distance of the address for the given parameter location in the query | [optional] 
**district** | **str** | The district, mainly use for Russia | [optional] 
**extra_info** | **str** | Informations on floor, unit, and sometimes POBOX,... | [optional] 
**floor** | **str** | The floor in an address, not a floor number in a unit (Brasilia only) | [optional] 
**geocodinglevel** | **str** |  | [optional] 
**house_number** | **str** | Official number assigned to an address by the municipality, several languages supported | [optional] 
**house_number_info** | **str** | All information that give extra information on the house number | [optional] 
**id** | **int** | An internal ID to identify the address | [optional] 
**lat** | **float** | The latitude of the address | [optional] 
**lng** | **float** | The longitude of the address | [optional] 
**lote** | **str** | Lote in Brazilian address | [optional] 
**name** | **str** | Name of the place, it is null in case of address but filled if common place. Name is different than recipient name | [optional] 
**name_alternates_localized** | **Dict[str, List[str]]** |  | [optional] 
**post_direction** | **str** | The cardinal direction after the name of the street | [optional] 
**post_direction_intersection** | **str** | The cardinal direction after the name of the intersection street | [optional] 
**post_town** | **str** | a city is a required part of all postal addresses in the United Kingdom | [optional] 
**pre_direction** | **str** | The cardinal direction before the name of the street | [optional] 
**pre_direction_intersection** | **str** | The cardinal direction before the name of the intersection street | [optional] 
**prefecture** | **str** | prefecture of China | [optional] 
**quadrant** | **str** | The quadrant in an address (Brasilia only) | [optional] 
**quarter** | **str** | A section of an urban settlement | [optional] 
**recipient_name** | **str** | Name of the organisation or person at the given address | [optional] 
**sector** | **str** | The sector in an address (Brasilia only) | [optional] 
**state** | **str** | The state or county when applicable, can be fullname or abbreviation | [optional] 
**street_name** | **str** | The official name of the street or the ordinal number | [optional] 
**street_name_intersection** | **str** | The official name of the intersection street | [optional] 
**street_type** | **str** | The type of the street | [optional] 
**street_type_intersection** | **str** | The type of the intersection street | [optional] 
**suite_number** | **str** | Informations on the unit, mainly used and filled by standardizer | [optional] 
**suite_type** | **str** | Informations on the unit, mainly used and filled by standardizer | [optional] 
**ward** | **str** | Ward in japanese address | [optional] 
**zip_code** | **str** | The zip or post code | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


