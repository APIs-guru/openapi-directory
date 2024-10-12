# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping

Customised grouping option that allows setting the group_by fields and also the filters togather for a configured insight request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_filter** | **str** | Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in &#x60;BASIC&#x60; view. &#x60;&#x3D;&#x60; is the only comparison operator supported. &#x60;AND&#x60; is the only logical operator supported. Usage: field_filter&#x3D;\&quot;fieldName1&#x3D;fieldVal1 AND fieldName2&#x3D;fieldVal2\&quot;. NOTE: Only &#x60;AND&#x60; conditions are allowed. NOTE: Use the &#x60;filter_alias&#x60; from &#x60;Insight.Metadata.Field&#x60; message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). | [optional] 
**group_fields** | **List[str]** | Required. Fields to be used for grouping. NOTE: Use the &#x60;filter_alias&#x60; from &#x60;Insight.Metadata.Field&#x60; message for declaring the fields to be grouped-by here. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_custom_grouping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


