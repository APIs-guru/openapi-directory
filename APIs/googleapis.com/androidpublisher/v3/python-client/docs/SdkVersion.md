# SdkVersion

Represents an sdk version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min** | **int** | Inclusive minimum value of an sdk version. | [optional] 

## Example

```python
from openapi_client.models.sdk_version import SdkVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SdkVersion from a JSON string
sdk_version_instance = SdkVersion.from_json(json)
# print the JSON string representation of the object
print(SdkVersion.to_json())

# convert the object into a dict
sdk_version_dict = sdk_version_instance.to_dict()
# create an instance of SdkVersion from a dict
sdk_version_from_dict = SdkVersion.from_dict(sdk_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


