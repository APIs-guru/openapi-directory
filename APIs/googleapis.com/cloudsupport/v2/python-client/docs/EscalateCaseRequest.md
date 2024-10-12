# EscalateCaseRequest

The request message for the EscalateCase endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**escalation** | [**Escalation**](Escalation.md) |  | [optional] 

## Example

```python
from openapi_client.models.escalate_case_request import EscalateCaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EscalateCaseRequest from a JSON string
escalate_case_request_instance = EscalateCaseRequest.from_json(json)
# print the JSON string representation of the object
print(EscalateCaseRequest.to_json())

# convert the object into a dict
escalate_case_request_dict = escalate_case_request_instance.to_dict()
# create an instance of EscalateCaseRequest from a dict
escalate_case_request_from_dict = EscalateCaseRequest.from_dict(escalate_case_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


