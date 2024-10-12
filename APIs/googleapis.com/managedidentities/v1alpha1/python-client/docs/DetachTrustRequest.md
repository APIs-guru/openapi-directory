# DetachTrustRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust** | [**Trust**](Trust.md) |  | [optional] 

## Example

```python
from openapi_client.models.detach_trust_request import DetachTrustRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DetachTrustRequest from a JSON string
detach_trust_request_instance = DetachTrustRequest.from_json(json)
# print the JSON string representation of the object
print(DetachTrustRequest.to_json())

# convert the object into a dict
detach_trust_request_dict = detach_trust_request_instance.to_dict()
# create an instance of DetachTrustRequest from a dict
detach_trust_request_from_dict = DetachTrustRequest.from_dict(detach_trust_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


