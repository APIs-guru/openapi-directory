# GoogleCloudRunV2BinaryAuthorization

Settings for Binary Authorization feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakglass_justification** | **str** | If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass | [optional] 
**use_default** | **bool** | If True, indicates to use the default project&#39;s binary authorization policy. If False, binary authorization will be disabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_binary_authorization import GoogleCloudRunV2BinaryAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2BinaryAuthorization from a JSON string
google_cloud_run_v2_binary_authorization_instance = GoogleCloudRunV2BinaryAuthorization.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2BinaryAuthorization.to_json())

# convert the object into a dict
google_cloud_run_v2_binary_authorization_dict = google_cloud_run_v2_binary_authorization_instance.to_dict()
# create an instance of GoogleCloudRunV2BinaryAuthorization from a dict
google_cloud_run_v2_binary_authorization_from_dict = GoogleCloudRunV2BinaryAuthorization.from_dict(google_cloud_run_v2_binary_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


