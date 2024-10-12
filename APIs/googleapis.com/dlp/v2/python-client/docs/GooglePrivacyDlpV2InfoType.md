# GooglePrivacyDlpV2InfoType

Type of information detected by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern &#x60;[A-Za-z0-9$_-]{1,64}&#x60;. | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 
**version** | **str** | Optional version name for this InfoType. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type import GooglePrivacyDlpV2InfoType

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoType from a JSON string
google_privacy_dlp_v2_info_type_instance = GooglePrivacyDlpV2InfoType.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoType.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_dict = google_privacy_dlp_v2_info_type_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoType from a dict
google_privacy_dlp_v2_info_type_from_dict = GooglePrivacyDlpV2InfoType.from_dict(google_privacy_dlp_v2_info_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


