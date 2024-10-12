# AwsEc2PlatformDetails

AWS EC2 specific details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the machine in the AWS format. | [optional] 
**machine_type_label** | **str** | AWS platform&#39;s machine type label. | [optional] 

## Example

```python
from openapi_client.models.aws_ec2_platform_details import AwsEc2PlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsEc2PlatformDetails from a JSON string
aws_ec2_platform_details_instance = AwsEc2PlatformDetails.from_json(json)
# print the JSON string representation of the object
print(AwsEc2PlatformDetails.to_json())

# convert the object into a dict
aws_ec2_platform_details_dict = aws_ec2_platform_details_instance.to_dict()
# create an instance of AwsEc2PlatformDetails from a dict
aws_ec2_platform_details_from_dict = AwsEc2PlatformDetails.from_dict(aws_ec2_platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


