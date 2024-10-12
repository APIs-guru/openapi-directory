# SecretVersion

Configuration for a single version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as &#39;/etc/secrets&#39; and path as &#x60;/secret_foo&#x60; would mount the secret value file at &#x60;/etc/secrets/secret_foo&#x60;. | [optional] 
**version** | **str** | Version of the secret (version number or the string &#39;latest&#39;). It is preferable to use &#x60;latest&#x60; version with secret volumes as secret value changes are reflected immediately. | [optional] 

## Example

```python
from openapi_client.models.secret_version import SecretVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SecretVersion from a JSON string
secret_version_instance = SecretVersion.from_json(json)
# print the JSON string representation of the object
print(SecretVersion.to_json())

# convert the object into a dict
secret_version_dict = secret_version_instance.to_dict()
# create an instance of SecretVersion from a dict
secret_version_from_dict = SecretVersion.from_dict(secret_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


