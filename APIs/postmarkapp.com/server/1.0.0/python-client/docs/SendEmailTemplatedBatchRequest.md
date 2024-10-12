# SendEmailTemplatedBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[EmailWithTemplateRequest]**](EmailWithTemplateRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_email_templated_batch_request import SendEmailTemplatedBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendEmailTemplatedBatchRequest from a JSON string
send_email_templated_batch_request_instance = SendEmailTemplatedBatchRequest.from_json(json)
# print the JSON string representation of the object
print(SendEmailTemplatedBatchRequest.to_json())

# convert the object into a dict
send_email_templated_batch_request_dict = send_email_templated_batch_request_instance.to_dict()
# create an instance of SendEmailTemplatedBatchRequest from a dict
send_email_templated_batch_request_from_dict = SendEmailTemplatedBatchRequest.from_dict(send_email_templated_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


