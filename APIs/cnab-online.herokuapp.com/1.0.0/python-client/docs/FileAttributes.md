# FileAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Número da conta à qual este arquivo está vinculado | [optional] 
**bank_code** | **int** | Código do banco | [optional] 
**bank_name** | **str** | Nome do banco | [optional] 
**company_name** | **str** | Nome da empresa a quem pertence este arquivo | [optional] 
**generation_date** | **date** | Data em que este arquivo foi gerado | [optional] 
**name** | **str** | Nome do arquivo | [optional] 

## Example

```python
from openapi_client.models.file_attributes import FileAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FileAttributes from a JSON string
file_attributes_instance = FileAttributes.from_json(json)
# print the JSON string representation of the object
print(FileAttributes.to_json())

# convert the object into a dict
file_attributes_dict = file_attributes_instance.to_dict()
# create an instance of FileAttributes from a dict
file_attributes_from_dict = FileAttributes.from_dict(file_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


