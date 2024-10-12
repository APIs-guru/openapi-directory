# CustomerProperties

The properties of a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the customer. | [optional] 
**enabled_azure_plans** | [**List[AzurePlan]**](AzurePlan.md) | Information about the product. | [optional] 
**resellers** | [**List[Reseller]**](Reseller.md) | The resellers which are allowed to provide service to this customer. | [optional] 

## Example

```python
from openapi_client.models.customer_properties import CustomerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerProperties from a JSON string
customer_properties_instance = CustomerProperties.from_json(json)
# print the JSON string representation of the object
print(CustomerProperties.to_json())

# convert the object into a dict
customer_properties_dict = customer_properties_instance.to_dict()
# create an instance of CustomerProperties from a dict
customer_properties_from_dict = CustomerProperties.from_dict(customer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


