# ResponseOrderAbandonedListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**order** | [**List[OrderAbandoned]**](OrderAbandoned.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_order_abandoned_list_result import ResponseOrderAbandonedListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOrderAbandonedListResult from a JSON string
response_order_abandoned_list_result_instance = ResponseOrderAbandonedListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseOrderAbandonedListResult.to_json())

# convert the object into a dict
response_order_abandoned_list_result_dict = response_order_abandoned_list_result_instance.to_dict()
# create an instance of ResponseOrderAbandonedListResult from a dict
response_order_abandoned_list_result_from_dict = ResponseOrderAbandonedListResult.from_dict(response_order_abandoned_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


