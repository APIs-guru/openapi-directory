# AwsAccessRole

Authentication method for Amazon Web Services (AWS) that uses Google owned Google service account to assume into customer's AWS IAM Role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_role_id** | **str** | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. | [optional] 
**identity** | **str** | A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user&#39;s AWS IAM Role. | [optional] 

## Example

```python
from openapi_client.models.aws_access_role import AwsAccessRole

# TODO update the JSON string below
json = "{}"
# create an instance of AwsAccessRole from a JSON string
aws_access_role_instance = AwsAccessRole.from_json(json)
# print the JSON string representation of the object
print(AwsAccessRole.to_json())

# convert the object into a dict
aws_access_role_dict = aws_access_role_instance.to_dict()
# create an instance of AwsAccessRole from a dict
aws_access_role_from_dict = AwsAccessRole.from_dict(aws_access_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


