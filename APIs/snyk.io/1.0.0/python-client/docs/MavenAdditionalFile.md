# MavenAdditionalFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the file, encoded according to the &#x60;encoding&#x60; field. | 

## Example

```python
from openapi_client.models.maven_additional_file import MavenAdditionalFile

# TODO update the JSON string below
json = "{}"
# create an instance of MavenAdditionalFile from a JSON string
maven_additional_file_instance = MavenAdditionalFile.from_json(json)
# print the JSON string representation of the object
print(MavenAdditionalFile.to_json())

# convert the object into a dict
maven_additional_file_dict = maven_additional_file_instance.to_dict()
# create an instance of MavenAdditionalFile from a dict
maven_additional_file_from_dict = MavenAdditionalFile.from_dict(maven_additional_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


