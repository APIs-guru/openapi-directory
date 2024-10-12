# UserComplianceStreamResponse

User compliance stream events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UserComplianceData**](UserComplianceData.md) |  | 
**errors** | [**List[Problem]**](Problem.md) |  | 

## Example

```python
from openapi_client.models.user_compliance_stream_response import UserComplianceStreamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserComplianceStreamResponse from a JSON string
user_compliance_stream_response_instance = UserComplianceStreamResponse.from_json(json)
# print the JSON string representation of the object
print(UserComplianceStreamResponse.to_json())

# convert the object into a dict
user_compliance_stream_response_dict = user_compliance_stream_response_instance.to_dict()
# create an instance of UserComplianceStreamResponse from a dict
user_compliance_stream_response_from_dict = UserComplianceStreamResponse.from_dict(user_compliance_stream_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


