# GoogleCloudApigeeV1KeyValueEntry

Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource URI that can be used to identify the scope of the key value map entries. | [optional] 
**value** | **str** | Required. Data or payload that is being retrieved and associated with the unique key. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_key_value_entry import GoogleCloudApigeeV1KeyValueEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1KeyValueEntry from a JSON string
google_cloud_apigee_v1_key_value_entry_instance = GoogleCloudApigeeV1KeyValueEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1KeyValueEntry.to_json())

# convert the object into a dict
google_cloud_apigee_v1_key_value_entry_dict = google_cloud_apigee_v1_key_value_entry_instance.to_dict()
# create an instance of GoogleCloudApigeeV1KeyValueEntry from a dict
google_cloud_apigee_v1_key_value_entry_from_dict = GoogleCloudApigeeV1KeyValueEntry.from_dict(google_cloud_apigee_v1_key_value_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


