# AppPreOrderCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppPreOrderCreateRequestDataAttributes**](AppPreOrderCreateRequestDataAttributes.md) |  | [optional] 
**relationships** | [**AppPreOrderCreateRequestDataRelationships**](AppPreOrderCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_pre_order_create_request_data import AppPreOrderCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrderCreateRequestData from a JSON string
app_pre_order_create_request_data_instance = AppPreOrderCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppPreOrderCreateRequestData.to_json())

# convert the object into a dict
app_pre_order_create_request_data_dict = app_pre_order_create_request_data_instance.to_dict()
# create an instance of AppPreOrderCreateRequestData from a dict
app_pre_order_create_request_data_from_dict = AppPreOrderCreateRequestData.from_dict(app_pre_order_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


