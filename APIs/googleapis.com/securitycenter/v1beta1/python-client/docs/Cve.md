# Cve

CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this vulnerability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvssv3** | [**Cvssv3**](Cvssv3.md) |  | [optional] 
**exploitation_activity** | **str** | The exploitation activity of the vulnerability in the wild. | [optional] 
**id** | **str** | The unique identifier for the vulnerability. e.g. CVE-2021-34527 | [optional] 
**impact** | **str** | The potential impact of the vulnerability if it was to be exploited. | [optional] 
**observed_in_the_wild** | **bool** | Whether or not the vulnerability has been observed in the wild. | [optional] 
**references** | [**List[Reference]**](Reference.md) | Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name&#x3D;CVE-2021-34527 | [optional] 
**upstream_fix_available** | **bool** | Whether upstream fix is available for the CVE. | [optional] 
**zero_day** | **bool** | Whether or not the vulnerability was zero day when the finding was published. | [optional] 

## Example

```python
from openapi_client.models.cve import Cve

# TODO update the JSON string below
json = "{}"
# create an instance of Cve from a JSON string
cve_instance = Cve.from_json(json)
# print the JSON string representation of the object
print(Cve.to_json())

# convert the object into a dict
cve_dict = cve_instance.to_dict()
# create an instance of Cve from a dict
cve_from_dict = Cve.from_dict(cve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


