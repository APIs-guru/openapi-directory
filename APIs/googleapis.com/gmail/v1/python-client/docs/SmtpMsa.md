# SmtpMsa

Configuration for communication with an SMTP service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The hostname of the SMTP service. Required. | [optional] 
**password** | **str** | The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses. | [optional] 
**port** | **int** | The port of the SMTP service. Required. | [optional] 
**security_mode** | **str** | The protocol that will be used to secure communication with the SMTP service. Required. | [optional] 
**username** | **str** | The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses. | [optional] 

## Example

```python
from openapi_client.models.smtp_msa import SmtpMsa

# TODO update the JSON string below
json = "{}"
# create an instance of SmtpMsa from a JSON string
smtp_msa_instance = SmtpMsa.from_json(json)
# print the JSON string representation of the object
print(SmtpMsa.to_json())

# convert the object into a dict
smtp_msa_dict = smtp_msa_instance.to_dict()
# create an instance of SmtpMsa from a dict
smtp_msa_from_dict = SmtpMsa.from_dict(smtp_msa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


