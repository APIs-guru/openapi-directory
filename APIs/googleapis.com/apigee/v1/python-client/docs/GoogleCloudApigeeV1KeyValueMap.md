# GoogleCloudApigeeV1KeyValueMap

Collection of key/value string pairs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted** | **bool** | Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be &#x60;true&#x60;. Apigee X and hybrid do not support unencrypted key value maps. | [optional] 
**name** | **str** | Required. ID of the key value map. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_key_value_map import GoogleCloudApigeeV1KeyValueMap

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1KeyValueMap from a JSON string
google_cloud_apigee_v1_key_value_map_instance = GoogleCloudApigeeV1KeyValueMap.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1KeyValueMap.to_json())

# convert the object into a dict
google_cloud_apigee_v1_key_value_map_dict = google_cloud_apigee_v1_key_value_map_instance.to_dict()
# create an instance of GoogleCloudApigeeV1KeyValueMap from a dict
google_cloud_apigee_v1_key_value_map_from_dict = GoogleCloudApigeeV1KeyValueMap.from_dict(google_cloud_apigee_v1_key_value_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


