# UpsertPatientRequestMetaQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** | Group to create/update patient in. | 
**identifier** | [**UpsertPatientRequestMetaQueryIdentifier**](UpsertPatientRequestMetaQueryIdentifier.md) |  | 

## Example

```python
from openapi_client.models.upsert_patient_request_meta_query import UpsertPatientRequestMetaQuery

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertPatientRequestMetaQuery from a JSON string
upsert_patient_request_meta_query_instance = UpsertPatientRequestMetaQuery.from_json(json)
# print the JSON string representation of the object
print(UpsertPatientRequestMetaQuery.to_json())

# convert the object into a dict
upsert_patient_request_meta_query_dict = upsert_patient_request_meta_query_instance.to_dict()
# create an instance of UpsertPatientRequestMetaQuery from a dict
upsert_patient_request_meta_query_from_dict = UpsertPatientRequestMetaQuery.from_dict(upsert_patient_request_meta_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


