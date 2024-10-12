# OSPolicyResourceFileGcs

Specifies a file available as a Cloud Storage Object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Required. Bucket of the Cloud Storage object. | [optional] 
**generation** | **str** | Generation number of the Cloud Storage object. | [optional] 
**object** | **str** | Required. Name of the Cloud Storage object. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_file_gcs import OSPolicyResourceFileGcs

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceFileGcs from a JSON string
os_policy_resource_file_gcs_instance = OSPolicyResourceFileGcs.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceFileGcs.to_json())

# convert the object into a dict
os_policy_resource_file_gcs_dict = os_policy_resource_file_gcs_instance.to_dict()
# create an instance of OSPolicyResourceFileGcs from a dict
os_policy_resource_file_gcs_from_dict = OSPolicyResourceFileGcs.from_dict(os_policy_resource_file_gcs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


