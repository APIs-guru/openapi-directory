# UpsertPatientRequestMetaQueryIdentifier

Identifier to match patient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system** | **str** | Name of system | [optional] 
**value** | **str** | Value in system | [optional] 

## Example

```python
from openapi_client.models.upsert_patient_request_meta_query_identifier import UpsertPatientRequestMetaQueryIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertPatientRequestMetaQueryIdentifier from a JSON string
upsert_patient_request_meta_query_identifier_instance = UpsertPatientRequestMetaQueryIdentifier.from_json(json)
# print the JSON string representation of the object
print(UpsertPatientRequestMetaQueryIdentifier.to_json())

# convert the object into a dict
upsert_patient_request_meta_query_identifier_dict = upsert_patient_request_meta_query_identifier_instance.to_dict()
# create an instance of UpsertPatientRequestMetaQueryIdentifier from a dict
upsert_patient_request_meta_query_identifier_from_dict = UpsertPatientRequestMetaQueryIdentifier.from_dict(upsert_patient_request_meta_query_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


