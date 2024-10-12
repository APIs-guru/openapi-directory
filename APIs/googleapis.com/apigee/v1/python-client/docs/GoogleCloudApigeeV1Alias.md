# GoogleCloudApigeeV1Alias

Reference to a certificate or key/certificate pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Resource ID for this alias. Values must match the regular expression &#x60;[^/]{1,255}&#x60;. | [optional] 
**certs_info** | [**GoogleCloudApigeeV1Certificate**](GoogleCloudApigeeV1Certificate.md) |  | [optional] 
**type** | **str** | Type of alias. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_alias import GoogleCloudApigeeV1Alias

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Alias from a JSON string
google_cloud_apigee_v1_alias_instance = GoogleCloudApigeeV1Alias.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Alias.to_json())

# convert the object into a dict
google_cloud_apigee_v1_alias_dict = google_cloud_apigee_v1_alias_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Alias from a dict
google_cloud_apigee_v1_alias_from_dict = GoogleCloudApigeeV1Alias.from_dict(google_cloud_apigee_v1_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


