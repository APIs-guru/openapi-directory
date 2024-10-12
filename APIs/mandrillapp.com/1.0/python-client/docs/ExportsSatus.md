# ExportsSatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exports_satus import ExportsSatus

# TODO update the JSON string below
json = "{}"
# create an instance of ExportsSatus from a JSON string
exports_satus_instance = ExportsSatus.from_json(json)
# print the JSON string representation of the object
print(ExportsSatus.to_json())

# convert the object into a dict
exports_satus_dict = exports_satus_instance.to_dict()
# create an instance of ExportsSatus from a dict
exports_satus_from_dict = ExportsSatus.from_dict(exports_satus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


