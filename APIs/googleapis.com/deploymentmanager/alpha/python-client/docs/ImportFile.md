# ImportFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The contents of the file. | [optional] 
**name** | **str** | The name of the file. | [optional] 

## Example

```python
from openapi_client.models.import_file import ImportFile

# TODO update the JSON string below
json = "{}"
# create an instance of ImportFile from a JSON string
import_file_instance = ImportFile.from_json(json)
# print the JSON string representation of the object
print(ImportFile.to_json())

# convert the object into a dict
import_file_dict = import_file_instance.to_dict()
# create an instance of ImportFile from a dict
import_file_from_dict = ImportFile.from_dict(import_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


