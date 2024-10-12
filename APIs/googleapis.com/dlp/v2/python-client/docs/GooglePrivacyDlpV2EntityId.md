# GooglePrivacyDlpV2EntityId

An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_entity_id import GooglePrivacyDlpV2EntityId

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2EntityId from a JSON string
google_privacy_dlp_v2_entity_id_instance = GooglePrivacyDlpV2EntityId.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2EntityId.to_json())

# convert the object into a dict
google_privacy_dlp_v2_entity_id_dict = google_privacy_dlp_v2_entity_id_instance.to_dict()
# create an instance of GooglePrivacyDlpV2EntityId from a dict
google_privacy_dlp_v2_entity_id_from_dict = GooglePrivacyDlpV2EntityId.from_dict(google_privacy_dlp_v2_entity_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


