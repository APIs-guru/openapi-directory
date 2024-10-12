# CustomerListDpcsResponse

Response message of customer's listing DPCs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dpcs** | [**List[Dpc]**](Dpc.md) | The list of DPCs available to the customer that support zero-touch enrollment. | [optional] 

## Example

```python
from openapi_client.models.customer_list_dpcs_response import CustomerListDpcsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListDpcsResponse from a JSON string
customer_list_dpcs_response_instance = CustomerListDpcsResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerListDpcsResponse.to_json())

# convert the object into a dict
customer_list_dpcs_response_dict = customer_list_dpcs_response_instance.to_dict()
# create an instance of CustomerListDpcsResponse from a dict
customer_list_dpcs_response_from_dict = CustomerListDpcsResponse.from_dict(customer_list_dpcs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


