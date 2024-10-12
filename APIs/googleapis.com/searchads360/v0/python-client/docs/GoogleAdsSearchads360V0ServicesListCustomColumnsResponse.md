# GoogleAdsSearchads360V0ServicesListCustomColumnsResponse

Response message for fetching all custom columns associated with a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_columns** | [**List[GoogleAdsSearchads360V0ResourcesCustomColumn]**](GoogleAdsSearchads360V0ResourcesCustomColumn.md) | The CustomColumns owned by the provided customer. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_list_custom_columns_response import GoogleAdsSearchads360V0ServicesListCustomColumnsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesListCustomColumnsResponse from a JSON string
google_ads_searchads360_v0_services_list_custom_columns_response_instance = GoogleAdsSearchads360V0ServicesListCustomColumnsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesListCustomColumnsResponse.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_list_custom_columns_response_dict = google_ads_searchads360_v0_services_list_custom_columns_response_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesListCustomColumnsResponse from a dict
google_ads_searchads360_v0_services_list_custom_columns_response_from_dict = GoogleAdsSearchads360V0ServicesListCustomColumnsResponse.from_dict(google_ads_searchads360_v0_services_list_custom_columns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


