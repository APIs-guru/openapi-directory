# AwsAccessKey

AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key_id** | **str** | Required. AWS access key ID. | [optional] 
**secret_access_key** | **str** | Required. AWS secret access key. This field is not returned in RPC responses. | [optional] 

## Example

```python
from openapi_client.models.aws_access_key import AwsAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of AwsAccessKey from a JSON string
aws_access_key_instance = AwsAccessKey.from_json(json)
# print the JSON string representation of the object
print(AwsAccessKey.to_json())

# convert the object into a dict
aws_access_key_dict = aws_access_key_instance.to_dict()
# create an instance of AwsAccessKey from a dict
aws_access_key_from_dict = AwsAccessKey.from_dict(aws_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


