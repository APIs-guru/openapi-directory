# GoogleCloudApigeeV1UpdateError

Details on why a resource update failed in the runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Status code. | [optional] 
**message** | **str** | User-friendly error message. | [optional] 
**resource** | **str** | The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource. | [optional] 
**type** | **str** | A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_update_error import GoogleCloudApigeeV1UpdateError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1UpdateError from a JSON string
google_cloud_apigee_v1_update_error_instance = GoogleCloudApigeeV1UpdateError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1UpdateError.to_json())

# convert the object into a dict
google_cloud_apigee_v1_update_error_dict = google_cloud_apigee_v1_update_error_instance.to_dict()
# create an instance of GoogleCloudApigeeV1UpdateError from a dict
google_cloud_apigee_v1_update_error_from_dict = GoogleCloudApigeeV1UpdateError.from_dict(google_cloud_apigee_v1_update_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


