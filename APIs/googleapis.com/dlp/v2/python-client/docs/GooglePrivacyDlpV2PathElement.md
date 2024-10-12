# GooglePrivacyDlpV2PathElement

A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. | [optional] 
**kind** | **str** | The kind of the entity. A kind matching regex &#x60;__.*__&#x60; is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be &#x60;\&quot;\&quot;&#x60;. | [optional] 
**name** | **str** | The name of the entity. A name matching regex &#x60;__.*__&#x60; is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be &#x60;\&quot;\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_path_element import GooglePrivacyDlpV2PathElement

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PathElement from a JSON string
google_privacy_dlp_v2_path_element_instance = GooglePrivacyDlpV2PathElement.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PathElement.to_json())

# convert the object into a dict
google_privacy_dlp_v2_path_element_dict = google_privacy_dlp_v2_path_element_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PathElement from a dict
google_privacy_dlp_v2_path_element_from_dict = GooglePrivacyDlpV2PathElement.from_dict(google_privacy_dlp_v2_path_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


