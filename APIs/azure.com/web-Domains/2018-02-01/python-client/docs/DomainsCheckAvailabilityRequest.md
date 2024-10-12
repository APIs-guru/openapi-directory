# DomainsCheckAvailabilityRequest

Identifies an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the object. | [optional] 

## Example

```python
from openapi_client.models.domains_check_availability_request import DomainsCheckAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DomainsCheckAvailabilityRequest from a JSON string
domains_check_availability_request_instance = DomainsCheckAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(DomainsCheckAvailabilityRequest.to_json())

# convert the object into a dict
domains_check_availability_request_dict = domains_check_availability_request_instance.to_dict()
# create an instance of DomainsCheckAvailabilityRequest from a dict
domains_check_availability_request_from_dict = DomainsCheckAvailabilityRequest.from_dict(domains_check_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


