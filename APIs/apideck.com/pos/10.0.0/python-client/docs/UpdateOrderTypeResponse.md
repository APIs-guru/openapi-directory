# UpdateOrderTypeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_order_type_response import UpdateOrderTypeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrderTypeResponse from a JSON string
update_order_type_response_instance = UpdateOrderTypeResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateOrderTypeResponse.to_json())

# convert the object into a dict
update_order_type_response_dict = update_order_type_response_instance.to_dict()
# create an instance of UpdateOrderTypeResponse from a dict
update_order_type_response_from_dict = UpdateOrderTypeResponse.from_dict(update_order_type_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


