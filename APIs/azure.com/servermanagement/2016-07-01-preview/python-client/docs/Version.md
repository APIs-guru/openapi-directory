# Version

A multipart-numeric version number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **int** | The third number of the version. | [optional] 
**major** | **int** | The leftmost number of the version. | [optional] 
**major_revision** | **int** | The MSW of the fourth part. | [optional] 
**minor** | **int** | The second leftmost number of the version. | [optional] 
**minor_revision** | **int** | The LSW of the fourth part. | [optional] 
**revision** | **int** | The fourth number of the version. | [optional] 

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


