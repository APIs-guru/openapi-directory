# GooglePrivacyDlpV2AuxiliaryTable

An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quasi_ids** | [**List[GooglePrivacyDlpV2QuasiIdField]**](GooglePrivacyDlpV2QuasiIdField.md) | Required. Quasi-identifier columns. | [optional] 
**relative_frequency** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_auxiliary_table import GooglePrivacyDlpV2AuxiliaryTable

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2AuxiliaryTable from a JSON string
google_privacy_dlp_v2_auxiliary_table_instance = GooglePrivacyDlpV2AuxiliaryTable.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2AuxiliaryTable.to_json())

# convert the object into a dict
google_privacy_dlp_v2_auxiliary_table_dict = google_privacy_dlp_v2_auxiliary_table_instance.to_dict()
# create an instance of GooglePrivacyDlpV2AuxiliaryTable from a dict
google_privacy_dlp_v2_auxiliary_table_from_dict = GooglePrivacyDlpV2AuxiliaryTable.from_dict(google_privacy_dlp_v2_auxiliary_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


