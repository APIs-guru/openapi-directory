# DnsNameAvailabilityResult

Response for the CheckDnsNameAvailability API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | Domain availability (True/False). | [optional] 

## Example

```python
from openapi_client.models.dns_name_availability_result import DnsNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of DnsNameAvailabilityResult from a JSON string
dns_name_availability_result_instance = DnsNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(DnsNameAvailabilityResult.to_json())

# convert the object into a dict
dns_name_availability_result_dict = dns_name_availability_result_instance.to_dict()
# create an instance of DnsNameAvailabilityResult from a dict
dns_name_availability_result_from_dict = DnsNameAvailabilityResult.from_dict(dns_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


