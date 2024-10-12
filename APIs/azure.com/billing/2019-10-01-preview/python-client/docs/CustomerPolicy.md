# CustomerPolicy

The Customer's Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CustomerPolicyProperties**](CustomerPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.customer_policy import CustomerPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerPolicy from a JSON string
customer_policy_instance = CustomerPolicy.from_json(json)
# print the JSON string representation of the object
print(CustomerPolicy.to_json())

# convert the object into a dict
customer_policy_dict = customer_policy_instance.to_dict()
# create an instance of CustomerPolicy from a dict
customer_policy_from_dict = CustomerPolicy.from_dict(customer_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


