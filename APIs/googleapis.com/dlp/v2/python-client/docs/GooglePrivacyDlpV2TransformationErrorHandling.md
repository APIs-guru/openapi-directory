# GooglePrivacyDlpV2TransformationErrorHandling

How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leave_untransformed** | **object** | Skips the data without modifying it if the requested transformation would cause an error. For example, if a &#x60;DateShift&#x60; transformation were applied an an IP address, this mode would leave the IP address unchanged in the response. | [optional] 
**throw_error** | **object** | Throw an error and fail the request when a transformation error occurs. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_error_handling import GooglePrivacyDlpV2TransformationErrorHandling

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationErrorHandling from a JSON string
google_privacy_dlp_v2_transformation_error_handling_instance = GooglePrivacyDlpV2TransformationErrorHandling.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationErrorHandling.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_error_handling_dict = google_privacy_dlp_v2_transformation_error_handling_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationErrorHandling from a dict
google_privacy_dlp_v2_transformation_error_handling_from_dict = GooglePrivacyDlpV2TransformationErrorHandling.from_dict(google_privacy_dlp_v2_transformation_error_handling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


