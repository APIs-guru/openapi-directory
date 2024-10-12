# ProductLog

Product action log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Operation error details. | [optional] [readonly] 
**end_date** | **str** | Operation end datetime. | [optional] [readonly] 
**error** | **str** | Operation error data. | [optional] [readonly] 
**id** | **str** | Log ID. | [optional] [readonly] 
**operation** | **str** | Logged operation. | [optional] [readonly] 
**product_id** | **str** | Logged product ID. | [optional] [readonly] 
**registration_name** | **str** | Logged registration name. | [optional] [readonly] 
**resource_group_name** | **str** | Logged resource group name. | [optional] [readonly] 
**start_date** | **str** | Operation start datetime. | [optional] [readonly] 
**status** | **str** | Operation status. | [optional] [readonly] 
**subscription_id** | **str** | Logged subscription ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_log import ProductLog

# TODO update the JSON string below
json = "{}"
# create an instance of ProductLog from a JSON string
product_log_instance = ProductLog.from_json(json)
# print the JSON string representation of the object
print(ProductLog.to_json())

# convert the object into a dict
product_log_dict = product_log_instance.to_dict()
# create an instance of ProductLog from a dict
product_log_from_dict = ProductLog.from_dict(product_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


