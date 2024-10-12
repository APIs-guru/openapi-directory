# Version

The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_features** | **List[str]** | Represents a list of available feature names for a given version. | [optional] 
**default_version** | **bool** | Whether this is currently the default version for Cloud Data Fusion | [optional] 
**type** | **str** | Type represents the release availability of the version | [optional] 
**version_number** | **str** | The version number of the Data Fusion instance, such as &#39;6.0.1.0&#39;. | [optional] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


