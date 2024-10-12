# SBTFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the file, encoded according to the &#x60;encoding&#x60; field. | 

## Example

```python
from openapi_client.models.sbt_file import SBTFile

# TODO update the JSON string below
json = "{}"
# create an instance of SBTFile from a JSON string
sbt_file_instance = SBTFile.from_json(json)
# print the JSON string representation of the object
print(SBTFile.to_json())

# convert the object into a dict
sbt_file_dict = sbt_file_instance.to_dict()
# create an instance of SBTFile from a dict
sbt_file_from_dict = SBTFile.from_dict(sbt_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


