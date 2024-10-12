# OpenFileList

Open file list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[OpenFileDetails]**](OpenFileDetails.md) | Open file details entries. | [optional] 

## Example

```python
from openapi_client.models.open_file_list import OpenFileList

# TODO update the JSON string below
json = "{}"
# create an instance of OpenFileList from a JSON string
open_file_list_instance = OpenFileList.from_json(json)
# print the JSON string representation of the object
print(OpenFileList.to_json())

# convert the object into a dict
open_file_list_dict = open_file_list_instance.to_dict()
# create an instance of OpenFileList from a dict
open_file_list_from_dict = OpenFileList.from_dict(open_file_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


