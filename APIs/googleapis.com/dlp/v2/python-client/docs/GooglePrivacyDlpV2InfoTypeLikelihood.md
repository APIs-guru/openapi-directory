# GooglePrivacyDlpV2InfoTypeLikelihood

Configuration for setting a minimum likelihood per infotype. Used to customize the minimum likelihood level for specific infotypes in the request. For example, use this if you want to lower the precision for PERSON_NAME without lowering the precision for the other infotypes in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**min_likelihood** | **str** | Only returns findings equal to or above this threshold. This field is required or else the configuration fails. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_likelihood import GooglePrivacyDlpV2InfoTypeLikelihood

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeLikelihood from a JSON string
google_privacy_dlp_v2_info_type_likelihood_instance = GooglePrivacyDlpV2InfoTypeLikelihood.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeLikelihood.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_likelihood_dict = google_privacy_dlp_v2_info_type_likelihood_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeLikelihood from a dict
google_privacy_dlp_v2_info_type_likelihood_from_dict = GooglePrivacyDlpV2InfoTypeLikelihood.from_dict(google_privacy_dlp_v2_info_type_likelihood_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


