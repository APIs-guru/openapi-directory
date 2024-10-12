# AwsSecurityGroup

AwsSecurityGroup describes a security group of an AWS VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The AWS security group id. | [optional] 
**name** | **str** | The AWS security group name. | [optional] 

## Example

```python
from openapi_client.models.aws_security_group import AwsSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AwsSecurityGroup from a JSON string
aws_security_group_instance = AwsSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(AwsSecurityGroup.to_json())

# convert the object into a dict
aws_security_group_dict = aws_security_group_instance.to_dict()
# create an instance of AwsSecurityGroup from a dict
aws_security_group_from_dict = AwsSecurityGroup.from_dict(aws_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


