# PeeringServiceCountryListResult

The paginated list of peering service countries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering service countries. | [optional] 
**value** | [**List[PeeringServiceCountry]**](PeeringServiceCountry.md) | The list of peering service countries. | [optional] 

## Example

```python
from openapi_client.models.peering_service_country_list_result import PeeringServiceCountryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceCountryListResult from a JSON string
peering_service_country_list_result_instance = PeeringServiceCountryListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceCountryListResult.to_json())

# convert the object into a dict
peering_service_country_list_result_dict = peering_service_country_list_result_instance.to_dict()
# create an instance of PeeringServiceCountryListResult from a dict
peering_service_country_list_result_from_dict = PeeringServiceCountryListResult.from_dict(peering_service_country_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


