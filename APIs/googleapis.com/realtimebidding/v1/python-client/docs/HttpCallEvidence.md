# HttpCallEvidence

HTTP calls made by a creative that resulted in policy violations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | **List[str]** | URLs of HTTP calls made by the creative. | [optional] 

## Example

```python
from openapi_client.models.http_call_evidence import HttpCallEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of HttpCallEvidence from a JSON string
http_call_evidence_instance = HttpCallEvidence.from_json(json)
# print the JSON string representation of the object
print(HttpCallEvidence.to_json())

# convert the object into a dict
http_call_evidence_dict = http_call_evidence_instance.to_dict()
# create an instance of HttpCallEvidence from a dict
http_call_evidence_from_dict = HttpCallEvidence.from_dict(http_call_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


