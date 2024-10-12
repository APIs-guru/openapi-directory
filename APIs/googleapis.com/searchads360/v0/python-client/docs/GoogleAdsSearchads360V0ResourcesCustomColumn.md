# GoogleAdsSearchads360V0ResourcesCustomColumn

A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. User-defined description of the custom column. | [optional] [readonly] 
**id** | **str** | Output only. ID of the custom column. | [optional] [readonly] 
**name** | **str** | Output only. User-defined name of the custom column. | [optional] [readonly] 
**queryable** | **bool** | Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream. | [optional] [readonly] 
**referenced_system_columns** | **List[str]** | Output only. The list of the referenced system columns of this custom column. For example, A custom column \&quot;sum of impressions and clicks\&quot; has referenced system columns of {\&quot;metrics.clicks\&quot;, \&quot;metrics.impressions\&quot;}. | [optional] [readonly] 
**references_attributes** | **bool** | Output only. True when the custom column is referring to one or more attributes. | [optional] [readonly] 
**references_metrics** | **bool** | Output only. True when the custom column is referring to one or more metrics. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the custom column. Custom column resource names have the form: &#x60;customers/{customer_id}/customColumns/{custom_column_id}&#x60; | [optional] 
**value_type** | **str** | Output only. The type of the result value of the custom column. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_custom_column import GoogleAdsSearchads360V0ResourcesCustomColumn

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCustomColumn from a JSON string
google_ads_searchads360_v0_resources_custom_column_instance = GoogleAdsSearchads360V0ResourcesCustomColumn.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCustomColumn.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_custom_column_dict = google_ads_searchads360_v0_resources_custom_column_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCustomColumn from a dict
google_ads_searchads360_v0_resources_custom_column_from_dict = GoogleAdsSearchads360V0ResourcesCustomColumn.from_dict(google_ads_searchads360_v0_resources_custom_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


