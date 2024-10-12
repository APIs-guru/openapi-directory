# EICDetailsVulnerabilities

Vulnerability information for residents of the property being supplied

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_type** | **str** | Is anyone in the property dependent on electricity for life support equipment? | 

## Example

```python
from openapi_client.models.eic_details_vulnerabilities import EICDetailsVulnerabilities

# TODO update the JSON string below
json = "{}"
# create an instance of EICDetailsVulnerabilities from a JSON string
eic_details_vulnerabilities_instance = EICDetailsVulnerabilities.from_json(json)
# print the JSON string representation of the object
print(EICDetailsVulnerabilities.to_json())

# convert the object into a dict
eic_details_vulnerabilities_dict = eic_details_vulnerabilities_instance.to_dict()
# create an instance of EICDetailsVulnerabilities from a dict
eic_details_vulnerabilities_from_dict = EICDetailsVulnerabilities.from_dict(eic_details_vulnerabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


