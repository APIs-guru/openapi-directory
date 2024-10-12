# APIPagedResponseDealerDBModelsDealersPerCountry

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[DealerDBModelsDealersPerCountry]**](DealerDBModelsDealersPerCountry.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_dealer_db_models_dealers_per_country import APIPagedResponseDealerDBModelsDealersPerCountry

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseDealerDBModelsDealersPerCountry from a JSON string
api_paged_response_dealer_db_models_dealers_per_country_instance = APIPagedResponseDealerDBModelsDealersPerCountry.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseDealerDBModelsDealersPerCountry.to_json())

# convert the object into a dict
api_paged_response_dealer_db_models_dealers_per_country_dict = api_paged_response_dealer_db_models_dealers_per_country_instance.to_dict()
# create an instance of APIPagedResponseDealerDBModelsDealersPerCountry from a dict
api_paged_response_dealer_db_models_dealers_per_country_from_dict = APIPagedResponseDealerDBModelsDealersPerCountry.from_dict(api_paged_response_dealer_db_models_dealers_per_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


