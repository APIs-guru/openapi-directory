# AwsKinesis

Ingestion settings for Amazon Kinesis Data Streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_role_arn** | **str** | Required. AWS role ARN to be used for Federated Identity authentication with Kinesis. Check the Pub/Sub docs for how to set up this role and the required permissions that need to be attached to it. | [optional] 
**consumer_arn** | **str** | Required. The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. The consumer must be already created and ready to be used. | [optional] 
**gcp_service_account** | **str** | Required. The GCP service account to be used for Federated Identity authentication with Kinesis (via a &#x60;AssumeRoleWithWebIdentity&#x60; call for the provided role). The &#x60;aws_role_arn&#x60; must be set up with &#x60;accounts.google.com:sub&#x60; equals to this service account number. | [optional] 
**state** | **str** | Output only. An output-only field that indicates the state of the Kinesis ingestion source. | [optional] [readonly] 
**stream_arn** | **str** | Required. The Kinesis stream ARN to ingest data from. | [optional] 

## Example

```python
from openapi_client.models.aws_kinesis import AwsKinesis

# TODO update the JSON string below
json = "{}"
# create an instance of AwsKinesis from a JSON string
aws_kinesis_instance = AwsKinesis.from_json(json)
# print the JSON string representation of the object
print(AwsKinesis.to_json())

# convert the object into a dict
aws_kinesis_dict = aws_kinesis_instance.to_dict()
# create an instance of AwsKinesis from a dict
aws_kinesis_from_dict = AwsKinesis.from_dict(aws_kinesis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


