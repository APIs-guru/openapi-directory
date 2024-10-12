# CustomerListDevicesResponse

Response message of customer's liting devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[Device]**](Device.md) | The customer&#39;s devices. | [optional] 
**next_page_token** | **str** | A token used to access the next page of results. Omitted if no further results are available. | [optional] 

## Example

```python
from openapi_client.models.customer_list_devices_response import CustomerListDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListDevicesResponse from a JSON string
customer_list_devices_response_instance = CustomerListDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerListDevicesResponse.to_json())

# convert the object into a dict
customer_list_devices_response_dict = customer_list_devices_response_instance.to_dict()
# create an instance of CustomerListDevicesResponse from a dict
customer_list_devices_response_from_dict = CustomerListDevicesResponse.from_dict(customer_list_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


