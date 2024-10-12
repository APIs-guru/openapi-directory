# AvailableVersion

Deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Reason for availability. | [optional] 
**version** | **str** | Kubernetes version. | [optional] 

## Example

```python
from openapi_client.models.available_version import AvailableVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableVersion from a JSON string
available_version_instance = AvailableVersion.from_json(json)
# print the JSON string representation of the object
print(AvailableVersion.to_json())

# convert the object into a dict
available_version_dict = available_version_instance.to_dict()
# create an instance of AvailableVersion from a dict
available_version_from_dict = AvailableVersion.from_dict(available_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


