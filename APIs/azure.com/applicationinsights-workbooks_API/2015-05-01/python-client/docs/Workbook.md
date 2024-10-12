# Workbook

An Application Insights workbook definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of workbook. Choices are user and shared. | [optional] 
**properties** | [**WorkbookProperties**](WorkbookProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.workbook import Workbook

# TODO update the JSON string below
json = "{}"
# create an instance of Workbook from a JSON string
workbook_instance = Workbook.from_json(json)
# print the JSON string representation of the object
print(Workbook.to_json())

# convert the object into a dict
workbook_dict = workbook_instance.to_dict()
# create an instance of Workbook from a dict
workbook_from_dict = Workbook.from_dict(workbook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


