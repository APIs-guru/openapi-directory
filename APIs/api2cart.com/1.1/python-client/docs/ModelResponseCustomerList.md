# ModelResponseCustomerList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**result** | [**ResponseCustomerListResult**](ResponseCustomerListResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_response_customer_list import ModelResponseCustomerList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResponseCustomerList from a JSON string
model_response_customer_list_instance = ModelResponseCustomerList.from_json(json)
# print the JSON string representation of the object
print(ModelResponseCustomerList.to_json())

# convert the object into a dict
model_response_customer_list_dict = model_response_customer_list_instance.to_dict()
# create an instance of ModelResponseCustomerList from a dict
model_response_customer_list_from_dict = ModelResponseCustomerList.from_dict(model_response_customer_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


