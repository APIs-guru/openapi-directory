# RetrievePricingAllCountries400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_title** | **str** |  | 
**invalid_parameters** | [**RetrievePricingAllCountries400ResponseInvalidParameters**](RetrievePricingAllCountries400ResponseInvalidParameters.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.retrieve_pricing_all_countries400_response import RetrievePricingAllCountries400Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrievePricingAllCountries400Response from a JSON string
retrieve_pricing_all_countries400_response_instance = RetrievePricingAllCountries400Response.from_json(json)
# print the JSON string representation of the object
print(RetrievePricingAllCountries400Response.to_json())

# convert the object into a dict
retrieve_pricing_all_countries400_response_dict = retrieve_pricing_all_countries400_response_instance.to_dict()
# create an instance of RetrievePricingAllCountries400Response from a dict
retrieve_pricing_all_countries400_response_from_dict = RetrievePricingAllCountries400Response.from_dict(retrieve_pricing_all_countries400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


