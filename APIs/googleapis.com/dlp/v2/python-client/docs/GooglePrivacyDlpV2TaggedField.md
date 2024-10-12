# GooglePrivacyDlpV2TaggedField

A column with a semantic tag attached.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_tag** | **str** | A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). | [optional] 
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**inferred** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_tagged_field import GooglePrivacyDlpV2TaggedField

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TaggedField from a JSON string
google_privacy_dlp_v2_tagged_field_instance = GooglePrivacyDlpV2TaggedField.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TaggedField.to_json())

# convert the object into a dict
google_privacy_dlp_v2_tagged_field_dict = google_privacy_dlp_v2_tagged_field_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TaggedField from a dict
google_privacy_dlp_v2_tagged_field_from_dict = GooglePrivacyDlpV2TaggedField.from_dict(google_privacy_dlp_v2_tagged_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


