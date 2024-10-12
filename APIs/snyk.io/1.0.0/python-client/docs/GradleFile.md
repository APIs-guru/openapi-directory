# GradleFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the file, encoded according to the &#x60;encoding&#x60; field. | 

## Example

```python
from openapi_client.models.gradle_file import GradleFile

# TODO update the JSON string below
json = "{}"
# create an instance of GradleFile from a JSON string
gradle_file_instance = GradleFile.from_json(json)
# print the JSON string representation of the object
print(GradleFile.to_json())

# convert the object into a dict
gradle_file_dict = gradle_file_instance.to_dict()
# create an instance of GradleFile from a dict
gradle_file_from_dict = GradleFile.from_dict(gradle_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


