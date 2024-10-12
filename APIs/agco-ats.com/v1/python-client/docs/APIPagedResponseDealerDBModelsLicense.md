# APIPagedResponseDealerDBModelsLicense

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[DealerDBModelsLicense]**](DealerDBModelsLicense.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_dealer_db_models_license import APIPagedResponseDealerDBModelsLicense

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseDealerDBModelsLicense from a JSON string
api_paged_response_dealer_db_models_license_instance = APIPagedResponseDealerDBModelsLicense.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseDealerDBModelsLicense.to_json())

# convert the object into a dict
api_paged_response_dealer_db_models_license_dict = api_paged_response_dealer_db_models_license_instance.to_dict()
# create an instance of APIPagedResponseDealerDBModelsLicense from a dict
api_paged_response_dealer_db_models_license_from_dict = APIPagedResponseDealerDBModelsLicense.from_dict(api_paged_response_dealer_db_models_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


