# VerifySmsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**sms** | **str** |  | 

## Example

```python
from openapi_client.models.verify_sms_request import VerifySmsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifySmsRequest from a JSON string
verify_sms_request_instance = VerifySmsRequest.from_json(json)
# print the JSON string representation of the object
print(VerifySmsRequest.to_json())

# convert the object into a dict
verify_sms_request_dict = verify_sms_request_instance.to_dict()
# create an instance of VerifySmsRequest from a dict
verify_sms_request_from_dict = VerifySmsRequest.from_dict(verify_sms_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


