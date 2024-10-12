# ImportRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] [readonly] 
**completed_at** | **datetime** |  | [optional] [readonly] 
**error_count** | **int** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**import_duration** | **int** |  | [optional] [readonly] 
**message** | **str** |  | [optional] [readonly] 
**project** | **str** |  | 
**started_at** | **datetime** |  | [optional] [readonly] 
**status_as_text** | **object** |  | [optional] [readonly] 
**success_count** | **int** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_read import ImportRead

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRead from a JSON string
import_read_instance = ImportRead.from_json(json)
# print the JSON string representation of the object
print(ImportRead.to_json())

# convert the object into a dict
import_read_dict = import_read_instance.to_dict()
# create an instance of ImportRead from a dict
import_read_from_dict = ImportRead.from_dict(import_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


