# DomainCallEvidence

Number of HTTP calls made by a creative, broken down by domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_http_call_domains** | [**List[DomainCalls]**](DomainCalls.md) | Breakdown of the most frequent domains called through HTTP by the creative. | [optional] 
**total_http_call_count** | **int** | The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains. | [optional] 

## Example

```python
from openapi_client.models.domain_call_evidence import DomainCallEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DomainCallEvidence from a JSON string
domain_call_evidence_instance = DomainCallEvidence.from_json(json)
# print the JSON string representation of the object
print(DomainCallEvidence.to_json())

# convert the object into a dict
domain_call_evidence_dict = domain_call_evidence_instance.to_dict()
# create an instance of DomainCallEvidence from a dict
domain_call_evidence_from_dict = DomainCallEvidence.from_dict(domain_call_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


