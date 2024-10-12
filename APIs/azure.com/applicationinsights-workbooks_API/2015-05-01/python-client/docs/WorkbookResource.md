# WorkbookResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.workbook_resource import WorkbookResource

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookResource from a JSON string
workbook_resource_instance = WorkbookResource.from_json(json)
# print the JSON string representation of the object
print(WorkbookResource.to_json())

# convert the object into a dict
workbook_resource_dict = workbook_resource_instance.to_dict()
# create an instance of WorkbookResource from a dict
workbook_resource_from_dict = WorkbookResource.from_dict(workbook_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


