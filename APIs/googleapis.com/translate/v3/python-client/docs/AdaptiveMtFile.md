# AdaptiveMtFile

An AdaptiveMtFile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this file was created. | [optional] [readonly] 
**display_name** | **str** | The file&#39;s display name. | [optional] 
**entry_count** | **int** | The number of entries that the file contains. | [optional] 
**name** | **str** | Required. The resource name of the file, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}&#x60; | [optional] 
**update_time** | **str** | Output only. Timestamp when this file was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_mt_file import AdaptiveMtFile

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtFile from a JSON string
adaptive_mt_file_instance = AdaptiveMtFile.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtFile.to_json())

# convert the object into a dict
adaptive_mt_file_dict = adaptive_mt_file_instance.to_dict()
# create an instance of AdaptiveMtFile from a dict
adaptive_mt_file_from_dict = AdaptiveMtFile.from_dict(adaptive_mt_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


