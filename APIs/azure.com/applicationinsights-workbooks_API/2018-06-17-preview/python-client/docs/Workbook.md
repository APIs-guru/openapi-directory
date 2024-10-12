# Workbook

An Application Insights workbook definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkbookProperties**](WorkbookProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**kind** | **str** | The kind of workbook. Choices are user and shared. | [optional] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name. This is GUID value. The display name should be assigned within properties field. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
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


