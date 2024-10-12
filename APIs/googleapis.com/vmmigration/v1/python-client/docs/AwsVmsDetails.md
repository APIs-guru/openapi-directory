# AwsVmsDetails

AWSVmsDetails describes VMs in AWS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[AwsVmDetails]**](AwsVmDetails.md) | The details of the AWS VMs. | [optional] 

## Example

```python
from openapi_client.models.aws_vms_details import AwsVmsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AwsVmsDetails from a JSON string
aws_vms_details_instance = AwsVmsDetails.from_json(json)
# print the JSON string representation of the object
print(AwsVmsDetails.to_json())

# convert the object into a dict
aws_vms_details_dict = aws_vms_details_instance.to_dict()
# create an instance of AwsVmsDetails from a dict
aws_vms_details_from_dict = AwsVmsDetails.from_dict(aws_vms_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


