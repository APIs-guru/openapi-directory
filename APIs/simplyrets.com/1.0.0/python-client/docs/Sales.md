# Sales

Sales Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | RETS Sales data agent id | [optional] 
**close_date** | **datetime** | RETS Sales data close date | [optional] 
**close_price** | **int** | RETS Sales data sold price | [optional] 
**contract_date** | **datetime** | RETS Sales data contract date | [optional] 
**office** | **str** | RETS Sales data selling office/brokerage id | [optional] 

## Example

```python
from openapi_client.models.sales import Sales

# TODO update the JSON string below
json = "{}"
# create an instance of Sales from a JSON string
sales_instance = Sales.from_json(json)
# print the JSON string representation of the object
print(Sales.to_json())

# convert the object into a dict
sales_dict = sales_instance.to_dict()
# create an instance of Sales from a dict
sales_from_dict = Sales.from_dict(sales_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


