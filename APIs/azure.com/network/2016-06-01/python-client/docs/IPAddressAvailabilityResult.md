# IPAddressAvailabilityResult

Response for CheckIPAddressAvailability Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | Private IP address availability | [optional] 
**available_ip_addresses** | **List[str]** | Contains other available private IP addresses if the asked for address is taken | [optional] 

## Example

```python
from openapi_client.models.ip_address_availability_result import IPAddressAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of IPAddressAvailabilityResult from a JSON string
ip_address_availability_result_instance = IPAddressAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(IPAddressAvailabilityResult.to_json())

# convert the object into a dict
ip_address_availability_result_dict = ip_address_availability_result_instance.to_dict()
# create an instance of IPAddressAvailabilityResult from a dict
ip_address_availability_result_from_dict = IPAddressAvailabilityResult.from_dict(ip_address_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


