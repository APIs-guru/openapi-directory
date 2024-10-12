# CustomerListConfigurationsResponse

Response message of customer's listing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | [**List[Configuration]**](Configuration.md) | The configurations. | [optional] 

## Example

```python
from openapi_client.models.customer_list_configurations_response import CustomerListConfigurationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListConfigurationsResponse from a JSON string
customer_list_configurations_response_instance = CustomerListConfigurationsResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerListConfigurationsResponse.to_json())

# convert the object into a dict
customer_list_configurations_response_dict = customer_list_configurations_response_instance.to_dict()
# create an instance of CustomerListConfigurationsResponse from a dict
customer_list_configurations_response_from_dict = CustomerListConfigurationsResponse.from_dict(customer_list_configurations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


