# GooglePrivacyDlpV2TransformationOverview

Overview of the modifications that occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transformation_summaries** | [**List[GooglePrivacyDlpV2TransformationSummary]**](GooglePrivacyDlpV2TransformationSummary.md) | Transformations applied to the dataset. | [optional] 
**transformed_bytes** | **str** | Total size in bytes that were transformed in some way. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_overview import GooglePrivacyDlpV2TransformationOverview

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationOverview from a JSON string
google_privacy_dlp_v2_transformation_overview_instance = GooglePrivacyDlpV2TransformationOverview.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationOverview.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_overview_dict = google_privacy_dlp_v2_transformation_overview_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationOverview from a dict
google_privacy_dlp_v2_transformation_overview_from_dict = GooglePrivacyDlpV2TransformationOverview.from_dict(google_privacy_dlp_v2_transformation_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


