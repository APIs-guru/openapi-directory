# GoogleFirestoreAdminV1IndexConfig

The index configuration for this field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_field** | **str** | Output only. Specifies the resource name of the &#x60;Field&#x60; from which this field&#39;s index configuration is set (when &#x60;uses_ancestor_config&#x60; is true), or from which it *would* be set if this field had no index configuration (when &#x60;uses_ancestor_config&#x60; is false). | [optional] 
**indexes** | [**List[GoogleFirestoreAdminV1Index]**](GoogleFirestoreAdminV1Index.md) | The indexes supported for this field. | [optional] 
**reverting** | **bool** | Output only When true, the &#x60;Field&#x60;&#39;s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by &#x60;ancestor_field&#x60;, at which point &#x60;uses_ancestor_config&#x60; will be &#x60;true&#x60; and &#x60;reverting&#x60; will be &#x60;false&#x60;. | [optional] 
**uses_ancestor_config** | **bool** | Output only. When true, the &#x60;Field&#x60;&#39;s index configuration is set from the configuration specified by the &#x60;ancestor_field&#x60;. When false, the &#x60;Field&#x60;&#39;s index configuration is defined explicitly. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_index_config import GoogleFirestoreAdminV1IndexConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1IndexConfig from a JSON string
google_firestore_admin_v1_index_config_instance = GoogleFirestoreAdminV1IndexConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1IndexConfig.to_json())

# convert the object into a dict
google_firestore_admin_v1_index_config_dict = google_firestore_admin_v1_index_config_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1IndexConfig from a dict
google_firestore_admin_v1_index_config_from_dict = GoogleFirestoreAdminV1IndexConfig.from_dict(google_firestore_admin_v1_index_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


