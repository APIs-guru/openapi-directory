# AccessProfile

Profile for enabling a user to access a managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kube_config** | **bytearray** | Base64-encoded Kubernetes configuration file. | [optional] 

## Example

```python
from openapi_client.models.access_profile import AccessProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AccessProfile from a JSON string
access_profile_instance = AccessProfile.from_json(json)
# print the JSON string representation of the object
print(AccessProfile.to_json())

# convert the object into a dict
access_profile_dict = access_profile_instance.to_dict()
# create an instance of AccessProfile from a dict
access_profile_from_dict = AccessProfile.from_dict(access_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


