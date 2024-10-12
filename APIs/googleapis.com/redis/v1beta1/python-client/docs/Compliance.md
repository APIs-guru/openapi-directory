# Compliance

Contains compliance information about a security standard indicating unmet recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standard** | **str** | Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. | [optional] 
**version** | **str** | Version of the standard or benchmark, for example, 1.1 | [optional] 

## Example

```python
from openapi_client.models.compliance import Compliance

# TODO update the JSON string below
json = "{}"
# create an instance of Compliance from a JSON string
compliance_instance = Compliance.from_json(json)
# print the JSON string representation of the object
print(Compliance.to_json())

# convert the object into a dict
compliance_dict = compliance_instance.to_dict()
# create an instance of Compliance from a dict
compliance_from_dict = Compliance.from_dict(compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


