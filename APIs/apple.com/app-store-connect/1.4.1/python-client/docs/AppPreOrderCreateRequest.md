# AppPreOrderCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreOrderCreateRequestData**](AppPreOrderCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_pre_order_create_request import AppPreOrderCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrderCreateRequest from a JSON string
app_pre_order_create_request_instance = AppPreOrderCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppPreOrderCreateRequest.to_json())

# convert the object into a dict
app_pre_order_create_request_dict = app_pre_order_create_request_instance.to_dict()
# create an instance of AppPreOrderCreateRequest from a dict
app_pre_order_create_request_from_dict = AppPreOrderCreateRequest.from_dict(app_pre_order_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


