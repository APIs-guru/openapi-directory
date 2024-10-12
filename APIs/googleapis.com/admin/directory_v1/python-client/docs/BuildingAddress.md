# BuildingAddress

Public API: Resources.buildings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_lines** | **List[str]** | Unstructured address lines describing the lower levels of an address. | [optional] 
**administrative_area** | **str** | Optional. Highest administrative subdivision which is used for postal addresses of a country or region. | [optional] 
**language_code** | **str** | Optional. BCP-47 language code of the contents of this address (if known). | [optional] 
**locality** | **str** | Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines. | [optional] 
**postal_code** | **str** | Optional. Postal code of the address. | [optional] 
**region_code** | **str** | Required. CLDR region code of the country/region of the address. | [optional] 
**sublocality** | **str** | Optional. Sublocality of the address. | [optional] 

## Example

```python
from openapi_client.models.building_address import BuildingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of BuildingAddress from a JSON string
building_address_instance = BuildingAddress.from_json(json)
# print the JSON string representation of the object
print(BuildingAddress.to_json())

# convert the object into a dict
building_address_dict = building_address_instance.to_dict()
# create an instance of BuildingAddress from a dict
building_address_from_dict = BuildingAddress.from_dict(building_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


