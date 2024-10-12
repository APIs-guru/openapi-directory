# GooglePrivacyDlpV2TransformationResultStatus

The outcome of a transformation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**result_status_type** | **str** | Transformation result status type, this will be either SUCCESS, or it will be the reason for why the transformation was not completely successful. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_result_status import GooglePrivacyDlpV2TransformationResultStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationResultStatus from a JSON string
google_privacy_dlp_v2_transformation_result_status_instance = GooglePrivacyDlpV2TransformationResultStatus.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationResultStatus.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_result_status_dict = google_privacy_dlp_v2_transformation_result_status_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationResultStatus from a dict
google_privacy_dlp_v2_transformation_result_status_from_dict = GooglePrivacyDlpV2TransformationResultStatus.from_dict(google_privacy_dlp_v2_transformation_result_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


