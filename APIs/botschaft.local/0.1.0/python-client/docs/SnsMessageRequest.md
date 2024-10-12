# SnsMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_message** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sns_message_request import SnsMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SnsMessageRequest from a JSON string
sns_message_request_instance = SnsMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SnsMessageRequest.to_json())

# convert the object into a dict
sns_message_request_dict = sns_message_request_instance.to_dict()
# create an instance of SnsMessageRequest from a dict
sns_message_request_from_dict = SnsMessageRequest.from_dict(sns_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


