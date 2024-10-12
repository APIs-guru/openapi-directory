# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow

Row of the fetch response consisting of a set of entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_values** | [**List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal]**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal.md) | Output only. Columns/entries/key-vals in the result. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_row import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


