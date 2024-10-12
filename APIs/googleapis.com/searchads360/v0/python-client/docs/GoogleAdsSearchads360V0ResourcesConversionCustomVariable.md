# GoogleAdsSearchads360V0ResourcesConversionCustomVariable

A conversion custom variable. See \"About custom Floodlight metrics and dimensions in the new Search Ads 360\" at https://support.google.com/sa360/answer/13567857

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality** | **str** | Output only. Cardinality of the conversion custom variable. | [optional] [readonly] 
**custom_column_ids** | **List[str]** | Output only. The IDs of custom columns that use this conversion custom variable. | [optional] [readonly] 
**family** | **str** | Output only. Family of the conversion custom variable. | [optional] [readonly] 
**floodlight_conversion_custom_variable_info** | [**GoogleAdsSearchads360V0ResourcesConversionCustomVariableFloodlightConversionCustomVariableInfo**](GoogleAdsSearchads360V0ResourcesConversionCustomVariableFloodlightConversionCustomVariableInfo.md) |  | [optional] 
**id** | **str** | Output only. The ID of the conversion custom variable. | [optional] [readonly] 
**name** | **str** | Required. The name of the conversion custom variable. Name should be unique. The maximum length of name is 100 characters. There should not be any extra spaces before and after. | [optional] 
**owner_customer** | **str** | Output only. The resource name of the customer that owns the conversion custom variable. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the conversion custom variable. Conversion custom variable resource names have the form: &#x60;customers/{customer_id}/conversionCustomVariables/{conversion_custom_variable_id}&#x60; | [optional] 
**status** | **str** | The status of the conversion custom variable for conversion event accrual. | [optional] 
**tag** | **str** | Required. Immutable. The tag of the conversion custom variable. Tag should be unique and consist of a \&quot;u\&quot; character directly followed with a number less than ormequal to 100. For example: \&quot;u4\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_custom_variable import GoogleAdsSearchads360V0ResourcesConversionCustomVariable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionCustomVariable from a JSON string
google_ads_searchads360_v0_resources_conversion_custom_variable_instance = GoogleAdsSearchads360V0ResourcesConversionCustomVariable.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionCustomVariable.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_custom_variable_dict = google_ads_searchads360_v0_resources_conversion_custom_variable_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionCustomVariable from a dict
google_ads_searchads360_v0_resources_conversion_custom_variable_from_dict = GoogleAdsSearchads360V0ResourcesConversionCustomVariable.from_dict(google_ads_searchads360_v0_resources_conversion_custom_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


