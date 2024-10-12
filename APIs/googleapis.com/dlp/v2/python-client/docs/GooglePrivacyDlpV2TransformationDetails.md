# GooglePrivacyDlpV2TransformationDetails

Details about a single transformation. This object contains a description of the transformation, information about whether the transformation was successfully applied, and the precise location where the transformation occurred. These details are stored in a user-specified BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The top level name of the container where the transformation is located (this will be the source file name or table name). | [optional] 
**resource_name** | **str** | The name of the job that completed the transformation. | [optional] 
**status_details** | [**GooglePrivacyDlpV2TransformationResultStatus**](GooglePrivacyDlpV2TransformationResultStatus.md) |  | [optional] 
**transformation** | [**List[GooglePrivacyDlpV2TransformationDescription]**](GooglePrivacyDlpV2TransformationDescription.md) | Description of transformation. This would only contain more than one element if there were multiple matching transformations and which one to apply was ambiguous. Not set for states that contain no transformation, currently only state that contains no transformation is TransformationResultStateType.METADATA_UNRETRIEVABLE. | [optional] 
**transformation_location** | [**GooglePrivacyDlpV2TransformationLocation**](GooglePrivacyDlpV2TransformationLocation.md) |  | [optional] 
**transformed_bytes** | **str** | The number of bytes that were transformed. If transformation was unsuccessful or did not take place because there was no content to transform, this will be zero. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_details import GooglePrivacyDlpV2TransformationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationDetails from a JSON string
google_privacy_dlp_v2_transformation_details_instance = GooglePrivacyDlpV2TransformationDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_details_dict = google_privacy_dlp_v2_transformation_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationDetails from a dict
google_privacy_dlp_v2_transformation_details_from_dict = GooglePrivacyDlpV2TransformationDetails.from_dict(google_privacy_dlp_v2_transformation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


