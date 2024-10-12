# GoogleFirestoreAdminV1TtlConfig

The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. The state of the TTL configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_ttl_config import GoogleFirestoreAdminV1TtlConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1TtlConfig from a JSON string
google_firestore_admin_v1_ttl_config_instance = GoogleFirestoreAdminV1TtlConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1TtlConfig.to_json())

# convert the object into a dict
google_firestore_admin_v1_ttl_config_dict = google_firestore_admin_v1_ttl_config_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1TtlConfig from a dict
google_firestore_admin_v1_ttl_config_from_dict = GoogleFirestoreAdminV1TtlConfig.from_dict(google_firestore_admin_v1_ttl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


