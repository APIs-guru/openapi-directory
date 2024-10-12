# ApiV2ListMarketsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **List[str]** |  | [optional] 
**allowed_for_your_subscription** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_list_markets_get200_response_data import ApiV2ListMarketsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2ListMarketsGet200ResponseData from a JSON string
api_v2_list_markets_get200_response_data_instance = ApiV2ListMarketsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiV2ListMarketsGet200ResponseData.to_json())

# convert the object into a dict
api_v2_list_markets_get200_response_data_dict = api_v2_list_markets_get200_response_data_instance.to_dict()
# create an instance of ApiV2ListMarketsGet200ResponseData from a dict
api_v2_list_markets_get200_response_data_from_dict = ApiV2ListMarketsGet200ResponseData.from_dict(api_v2_list_markets_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


