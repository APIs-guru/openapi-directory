# CheckDomainAvailabilityResult

Check Domain availability result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_subdomain_available** | **bool** | Indicates the given SKU is available or not. | [optional] 
**reason** | **str** | Reason why the SKU is not available. | [optional] 
**subdomain_name** | **str** | The subdomain name to use. | [optional] 
**type** | **str** | The Type of the resource. | [optional] 

## Example

```python
from openapi_client.models.check_domain_availability_result import CheckDomainAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDomainAvailabilityResult from a JSON string
check_domain_availability_result_instance = CheckDomainAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckDomainAvailabilityResult.to_json())

# convert the object into a dict
check_domain_availability_result_dict = check_domain_availability_result_instance.to_dict()
# create an instance of CheckDomainAvailabilityResult from a dict
check_domain_availability_result_from_dict = CheckDomainAvailabilityResult.from_dict(check_domain_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


