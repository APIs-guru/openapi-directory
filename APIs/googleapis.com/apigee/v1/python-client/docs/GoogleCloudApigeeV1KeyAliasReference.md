# GoogleCloudApigeeV1KeyAliasReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_id** | **str** | Alias ID. Must exist in the keystore referred to by the reference. | [optional] 
**reference** | **str** | Reference name in the following format: &#x60;organizations/{org}/environments/{env}/references/{reference}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_key_alias_reference import GoogleCloudApigeeV1KeyAliasReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1KeyAliasReference from a JSON string
google_cloud_apigee_v1_key_alias_reference_instance = GoogleCloudApigeeV1KeyAliasReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1KeyAliasReference.to_json())

# convert the object into a dict
google_cloud_apigee_v1_key_alias_reference_dict = google_cloud_apigee_v1_key_alias_reference_instance.to_dict()
# create an instance of GoogleCloudApigeeV1KeyAliasReference from a dict
google_cloud_apigee_v1_key_alias_reference_from_dict = GoogleCloudApigeeV1KeyAliasReference.from_dict(google_cloud_apigee_v1_key_alias_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


