# ExportResultV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_files** | **int** |  | [optional] 
**file_urls** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] 
**total_files** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.export_result_v2 import ExportResultV2

# TODO update the JSON string below
json = "{}"
# create an instance of ExportResultV2 from a JSON string
export_result_v2_instance = ExportResultV2.from_json(json)
# print the JSON string representation of the object
print(ExportResultV2.to_json())

# convert the object into a dict
export_result_v2_dict = export_result_v2_instance.to_dict()
# create an instance of ExportResultV2 from a dict
export_result_v2_from_dict = ExportResultV2.from_dict(export_result_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


