# CheckDomainAvailabilityParameter

Check Domain availability parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subdomain_name** | **str** | The subdomain name to use. | 
**type** | **str** | The Type of the resource. | 

## Example

```python
from openapi_client.models.check_domain_availability_parameter import CheckDomainAvailabilityParameter

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDomainAvailabilityParameter from a JSON string
check_domain_availability_parameter_instance = CheckDomainAvailabilityParameter.from_json(json)
# print the JSON string representation of the object
print(CheckDomainAvailabilityParameter.to_json())

# convert the object into a dict
check_domain_availability_parameter_dict = check_domain_availability_parameter_instance.to_dict()
# create an instance of CheckDomainAvailabilityParameter from a dict
check_domain_availability_parameter_from_dict = CheckDomainAvailabilityParameter.from_dict(check_domain_availability_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


