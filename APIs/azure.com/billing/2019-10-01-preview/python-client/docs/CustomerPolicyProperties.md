# CustomerPolicyProperties

The properties of a Customer's policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_charges** | **str** | Customer can view retail prices. | [optional] 

## Example

```python
from openapi_client.models.customer_policy_properties import CustomerPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerPolicyProperties from a JSON string
customer_policy_properties_instance = CustomerPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(CustomerPolicyProperties.to_json())

# convert the object into a dict
customer_policy_properties_dict = customer_policy_properties_instance.to_dict()
# create an instance of CustomerPolicyProperties from a dict
customer_policy_properties_from_dict = CustomerPolicyProperties.from_dict(customer_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


