# AppPreOrderUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreOrderUpdateRequestData**](AppPreOrderUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_pre_order_update_request import AppPreOrderUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrderUpdateRequest from a JSON string
app_pre_order_update_request_instance = AppPreOrderUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreOrderUpdateRequest.to_json())

# convert the object into a dict
app_pre_order_update_request_dict = app_pre_order_update_request_instance.to_dict()
# create an instance of AppPreOrderUpdateRequest from a dict
app_pre_order_update_request_from_dict = AppPreOrderUpdateRequest.from_dict(app_pre_order_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


