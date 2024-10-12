# APIPagedResponseDealerDBModelsDealer

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[DealerDBModelsDealer]**](DealerDBModelsDealer.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_dealer_db_models_dealer import APIPagedResponseDealerDBModelsDealer

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseDealerDBModelsDealer from a JSON string
api_paged_response_dealer_db_models_dealer_instance = APIPagedResponseDealerDBModelsDealer.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseDealerDBModelsDealer.to_json())

# convert the object into a dict
api_paged_response_dealer_db_models_dealer_dict = api_paged_response_dealer_db_models_dealer_instance.to_dict()
# create an instance of APIPagedResponseDealerDBModelsDealer from a dict
api_paged_response_dealer_db_models_dealer_from_dict = APIPagedResponseDealerDBModelsDealer.from_dict(api_paged_response_dealer_db_models_dealer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


