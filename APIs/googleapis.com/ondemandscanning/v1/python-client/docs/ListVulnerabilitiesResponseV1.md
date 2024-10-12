# ListVulnerabilitiesResponseV1

ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results. | [optional] 
**occurrences** | [**List[Occurrence]**](Occurrence.md) | The list of Vulnerability Occurrences resulting from a scan. | [optional] 

## Example

```python
from openapi_client.models.list_vulnerabilities_response_v1 import ListVulnerabilitiesResponseV1

# TODO update the JSON string below
json = "{}"
# create an instance of ListVulnerabilitiesResponseV1 from a JSON string
list_vulnerabilities_response_v1_instance = ListVulnerabilitiesResponseV1.from_json(json)
# print the JSON string representation of the object
print(ListVulnerabilitiesResponseV1.to_json())

# convert the object into a dict
list_vulnerabilities_response_v1_dict = list_vulnerabilities_response_v1_instance.to_dict()
# create an instance of ListVulnerabilitiesResponseV1 from a dict
list_vulnerabilities_response_v1_from_dict = ListVulnerabilitiesResponseV1.from_dict(list_vulnerabilities_response_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


