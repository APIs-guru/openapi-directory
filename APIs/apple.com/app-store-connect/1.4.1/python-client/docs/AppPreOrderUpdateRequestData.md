# AppPreOrderUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreOrderCreateRequestDataAttributes**](AppPreOrderCreateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_pre_order_update_request_data import AppPreOrderUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrderUpdateRequestData from a JSON string
app_pre_order_update_request_data_instance = AppPreOrderUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppPreOrderUpdateRequestData.to_json())

# convert the object into a dict
app_pre_order_update_request_data_dict = app_pre_order_update_request_data_instance.to_dict()
# create an instance of AppPreOrderUpdateRequestData from a dict
app_pre_order_update_request_data_from_dict = AppPreOrderUpdateRequestData.from_dict(app_pre_order_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


