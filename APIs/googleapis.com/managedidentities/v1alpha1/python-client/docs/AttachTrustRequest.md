# AttachTrustRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust** | [**Trust**](Trust.md) |  | [optional] 

## Example

```python
from openapi_client.models.attach_trust_request import AttachTrustRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AttachTrustRequest from a JSON string
attach_trust_request_instance = AttachTrustRequest.from_json(json)
# print the JSON string representation of the object
print(AttachTrustRequest.to_json())

# convert the object into a dict
attach_trust_request_dict = attach_trust_request_instance.to_dict()
# create an instance of AttachTrustRequest from a dict
attach_trust_request_from_dict = AttachTrustRequest.from_dict(attach_trust_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


