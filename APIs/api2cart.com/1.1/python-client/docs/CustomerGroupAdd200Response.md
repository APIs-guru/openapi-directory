# CustomerGroupAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[CustomerGroup]**](CustomerGroup.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_group_add200_response import CustomerGroupAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerGroupAdd200Response from a JSON string
customer_group_add200_response_instance = CustomerGroupAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CustomerGroupAdd200Response.to_json())

# convert the object into a dict
customer_group_add200_response_dict = customer_group_add200_response_instance.to_dict()
# create an instance of CustomerGroupAdd200Response from a dict
customer_group_add200_response_from_dict = CustomerGroupAdd200Response.from_dict(customer_group_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


