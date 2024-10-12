# UserComplianceStreamResponseOneOf

User compliance event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UserComplianceData**](UserComplianceData.md) |  | 

## Example

```python
from openapi_client.models.user_compliance_stream_response_one_of import UserComplianceStreamResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of UserComplianceStreamResponseOneOf from a JSON string
user_compliance_stream_response_one_of_instance = UserComplianceStreamResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(UserComplianceStreamResponseOneOf.to_json())

# convert the object into a dict
user_compliance_stream_response_one_of_dict = user_compliance_stream_response_one_of_instance.to_dict()
# create an instance of UserComplianceStreamResponseOneOf from a dict
user_compliance_stream_response_one_of_from_dict = UserComplianceStreamResponseOneOf.from_dict(user_compliance_stream_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


