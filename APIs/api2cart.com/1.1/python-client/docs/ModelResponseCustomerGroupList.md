# ModelResponseCustomerGroupList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**result** | [**ResponseCustomerGroupListResult**](ResponseCustomerGroupListResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_response_customer_group_list import ModelResponseCustomerGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResponseCustomerGroupList from a JSON string
model_response_customer_group_list_instance = ModelResponseCustomerGroupList.from_json(json)
# print the JSON string representation of the object
print(ModelResponseCustomerGroupList.to_json())

# convert the object into a dict
model_response_customer_group_list_dict = model_response_customer_group_list_instance.to_dict()
# create an instance of ModelResponseCustomerGroupList from a dict
model_response_customer_group_list_from_dict = ModelResponseCustomerGroupList.from_dict(model_response_customer_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


