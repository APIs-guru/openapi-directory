# PlatformDetails

Information about the platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_ec2_details** | [**AwsEc2PlatformDetails**](AwsEc2PlatformDetails.md) |  | [optional] 
**azure_vm_details** | [**AzureVmPlatformDetails**](AzureVmPlatformDetails.md) |  | [optional] 
**generic_details** | [**GenericPlatformDetails**](GenericPlatformDetails.md) |  | [optional] 
**physical_details** | [**PhysicalPlatformDetails**](PhysicalPlatformDetails.md) |  | [optional] 
**vmware_details** | [**VmwarePlatformDetails**](VmwarePlatformDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.platform_details import PlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformDetails from a JSON string
platform_details_instance = PlatformDetails.from_json(json)
# print the JSON string representation of the object
print(PlatformDetails.to_json())

# convert the object into a dict
platform_details_dict = platform_details_instance.to_dict()
# create an instance of PlatformDetails from a dict
platform_details_from_dict = PlatformDetails.from_dict(platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


