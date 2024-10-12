# RateCardQueryParameters

Parameters that are used in the odata $filter query parameter for providing RateCard information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency in which the rates need to be provided. | 
**locale** | **str** | The culture in which the resource metadata needs to be localized. | 
**offer_durable_id** | **str** | The Offer ID parameter consists of the &#39;MS-AZR-&#39; prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See https://azure.microsoft.com/en-us/support/legal/offer-details/ for more information on the list of available Offer IDs, country/region availability, and billing currency. | 
**region_info** | **str** | 2 letter ISO code where the offer was purchased. | 

## Example

```python
from openapi_client.models.rate_card_query_parameters import RateCardQueryParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RateCardQueryParameters from a JSON string
rate_card_query_parameters_instance = RateCardQueryParameters.from_json(json)
# print the JSON string representation of the object
print(RateCardQueryParameters.to_json())

# convert the object into a dict
rate_card_query_parameters_dict = rate_card_query_parameters_instance.to_dict()
# create an instance of RateCardQueryParameters from a dict
rate_card_query_parameters_from_dict = RateCardQueryParameters.from_dict(rate_card_query_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


