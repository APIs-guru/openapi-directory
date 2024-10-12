# CombinePdfsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_custom_files** | **bool** |  | [optional] 
**expires_in** | **int** |  | [optional] 
**metadata** | **object** |  | [optional] 
**password** | **str** |  | [optional] 
**source_pdfs** | [**List[CombinedSubmissionSourcePdfsInner]**](CombinedSubmissionSourcePdfsInner.md) |  | 
**test** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.combine_pdfs_data import CombinePdfsData

# TODO update the JSON string below
json = "{}"
# create an instance of CombinePdfsData from a JSON string
combine_pdfs_data_instance = CombinePdfsData.from_json(json)
# print the JSON string representation of the object
print(CombinePdfsData.to_json())

# convert the object into a dict
combine_pdfs_data_dict = combine_pdfs_data_instance.to_dict()
# create an instance of CombinePdfsData from a dict
combine_pdfs_data_from_dict = CombinePdfsData.from_dict(combine_pdfs_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


