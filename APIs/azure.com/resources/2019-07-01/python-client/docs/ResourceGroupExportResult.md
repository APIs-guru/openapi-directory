# ResourceGroupExportResult

Resource group export result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CloudErrorError**](CloudErrorError.md) |  | [optional] 
**template** | **object** | The template content. | [optional] 

## Example

```python
from openapi_client.models.resource_group_export_result import ResourceGroupExportResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupExportResult from a JSON string
resource_group_export_result_instance = ResourceGroupExportResult.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupExportResult.to_json())

# convert the object into a dict
resource_group_export_result_dict = resource_group_export_result_instance.to_dict()
# create an instance of ResourceGroupExportResult from a dict
resource_group_export_result_from_dict = ResourceGroupExportResult.from_dict(resource_group_export_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


