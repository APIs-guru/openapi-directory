# FileLabelInfo

Output only. An overview of the labels on the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**List[Label]**](Label.md) | Output only. The set of labels on the file as requested by the label IDs in the &#x60;includeLabels&#x60; parameter. By default, no labels are returned. | [optional] 

## Example

```python
from openapi_client.models.file_label_info import FileLabelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileLabelInfo from a JSON string
file_label_info_instance = FileLabelInfo.from_json(json)
# print the JSON string representation of the object
print(FileLabelInfo.to_json())

# convert the object into a dict
file_label_info_dict = file_label_info_instance.to_dict()
# create an instance of FileLabelInfo from a dict
file_label_info_from_dict = FileLabelInfo.from_dict(file_label_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


