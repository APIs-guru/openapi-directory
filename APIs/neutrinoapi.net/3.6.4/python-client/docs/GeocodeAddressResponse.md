# GeocodeAddressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**found** | **int** | The number of possible matching locations found | 
**locations** | [**List[Location]**](Location.md) | Array of matching location objects | 

## Example

```python
from openapi_client.models.geocode_address_response import GeocodeAddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeocodeAddressResponse from a JSON string
geocode_address_response_instance = GeocodeAddressResponse.from_json(json)
# print the JSON string representation of the object
print(GeocodeAddressResponse.to_json())

# convert the object into a dict
geocode_address_response_dict = geocode_address_response_instance.to_dict()
# create an instance of GeocodeAddressResponse from a dict
geocode_address_response_from_dict = GeocodeAddressResponse.from_dict(geocode_address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


