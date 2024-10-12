# CheckSQSRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sqs_key** | **str** | AWS SQS access key | [optional] 
**sqs_secret** | **str** | AWS SQS key secret | [optional] 
**sqs_url** | **str** | AWS SQS endpoint URL | [optional] 

## Example

```python
from openapi_client.models.check_sqs_request import CheckSQSRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSQSRequest from a JSON string
check_sqs_request_instance = CheckSQSRequest.from_json(json)
# print the JSON string representation of the object
print(CheckSQSRequest.to_json())

# convert the object into a dict
check_sqs_request_dict = check_sqs_request_instance.to_dict()
# create an instance of CheckSQSRequest from a dict
check_sqs_request_from_dict = CheckSQSRequest.from_dict(check_sqs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


