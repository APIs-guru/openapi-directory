# CVE

CVE details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Link url | [optional] [readonly] 
**title** | **str** | CVE title | [optional] [readonly] 

## Example

```python
from openapi_client.models.cve import CVE

# TODO update the JSON string below
json = "{}"
# create an instance of CVE from a JSON string
cve_instance = CVE.from_json(json)
# print the JSON string representation of the object
print(CVE.to_json())

# convert the object into a dict
cve_dict = cve_instance.to_dict()
# create an instance of CVE from a dict
cve_from_dict = CVE.from_dict(cve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


