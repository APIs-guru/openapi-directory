# RetrievePricingAllCountries401Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**currency** | **str** |  | 
**error_code_label** | **str** |  | 

## Example

```python
from openapi_client.models.retrieve_pricing_all_countries401_response import RetrievePricingAllCountries401Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrievePricingAllCountries401Response from a JSON string
retrieve_pricing_all_countries401_response_instance = RetrievePricingAllCountries401Response.from_json(json)
# print the JSON string representation of the object
print(RetrievePricingAllCountries401Response.to_json())

# convert the object into a dict
retrieve_pricing_all_countries401_response_dict = retrieve_pricing_all_countries401_response_instance.to_dict()
# create an instance of RetrievePricingAllCountries401Response from a dict
retrieve_pricing_all_countries401_response_from_dict = RetrievePricingAllCountries401Response.from_dict(retrieve_pricing_all_countries401_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


