# TableService

Table service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TableServiceProperties**](TableServiceProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.table_service import TableService

# TODO update the JSON string below
json = "{}"
# create an instance of TableService from a JSON string
table_service_instance = TableService.from_json(json)
# print the JSON string representation of the object
print(TableService.to_json())

# convert the object into a dict
table_service_dict = table_service_instance.to_dict()
# create an instance of TableService from a dict
table_service_from_dict = TableService.from_dict(table_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


