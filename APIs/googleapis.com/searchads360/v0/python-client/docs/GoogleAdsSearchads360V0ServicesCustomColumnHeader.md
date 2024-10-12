# GoogleAdsSearchads360V0ServicesCustomColumnHeader

Message for custom column header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The custom column ID. | [optional] 
**name** | **str** | The user defined name of the custom column. | [optional] 
**references_metrics** | **bool** | True when the custom column references metrics. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_custom_column_header import GoogleAdsSearchads360V0ServicesCustomColumnHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesCustomColumnHeader from a JSON string
google_ads_searchads360_v0_services_custom_column_header_instance = GoogleAdsSearchads360V0ServicesCustomColumnHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesCustomColumnHeader.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_custom_column_header_dict = google_ads_searchads360_v0_services_custom_column_header_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesCustomColumnHeader from a dict
google_ads_searchads360_v0_services_custom_column_header_from_dict = GoogleAdsSearchads360V0ServicesCustomColumnHeader.from_dict(google_ads_searchads360_v0_services_custom_column_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


