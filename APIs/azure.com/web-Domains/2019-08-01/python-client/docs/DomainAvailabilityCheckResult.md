# DomainAvailabilityCheckResult

Domain availability check result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | &lt;code&gt;true&lt;/code&gt; if domain can be purchased using CreateDomain API; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**domain_type** | **str** | Valid values are Regular domain: Azure will charge the full price of domain registration, SoftDeleted: Purchasing this domain will simply restore it and this operation will not cost anything. | [optional] 
**name** | **str** | Name of the domain. | [optional] 

## Example

```python
from openapi_client.models.domain_availability_check_result import DomainAvailabilityCheckResult

# TODO update the JSON string below
json = "{}"
# create an instance of DomainAvailabilityCheckResult from a JSON string
domain_availability_check_result_instance = DomainAvailabilityCheckResult.from_json(json)
# print the JSON string representation of the object
print(DomainAvailabilityCheckResult.to_json())

# convert the object into a dict
domain_availability_check_result_dict = domain_availability_check_result_instance.to_dict()
# create an instance of DomainAvailabilityCheckResult from a dict
domain_availability_check_result_from_dict = DomainAvailabilityCheckResult.from_dict(domain_availability_check_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


