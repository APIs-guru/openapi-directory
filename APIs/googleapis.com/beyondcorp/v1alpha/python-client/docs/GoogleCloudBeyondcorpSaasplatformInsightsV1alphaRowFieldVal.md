# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal

Column or key value pair from the request as part of key to use in query or a single pair of the fetch response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. Name of the field. | [optional] [readonly] 
**filter_alias** | **str** | Output only. Field name to be used in filter while requesting configured insight filtered on this field. | [optional] [readonly] 
**id** | **str** | Output only. Field id. | [optional] [readonly] 
**value** | **str** | Output only. Value of the field in string format. Acceptable values are strings or numbers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_field_val_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


