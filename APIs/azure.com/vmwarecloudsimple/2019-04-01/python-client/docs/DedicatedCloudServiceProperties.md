# DedicatedCloudServiceProperties

Properties of dedicated cloud service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_subnet** | **str** | gateway Subnet for the account. It will collect the subnet address and always treat it as /28 | 
**is_account_onboarded** | **str** | indicates whether account onboarded or not in a given region | [optional] [readonly] 
**nodes** | **int** | total nodes purchased | [optional] [readonly] 
**service_url** | **str** | link to a service management web portal | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_cloud_service_properties import DedicatedCloudServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudServiceProperties from a JSON string
dedicated_cloud_service_properties_instance = DedicatedCloudServiceProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudServiceProperties.to_json())

# convert the object into a dict
dedicated_cloud_service_properties_dict = dedicated_cloud_service_properties_instance.to_dict()
# create an instance of DedicatedCloudServiceProperties from a dict
dedicated_cloud_service_properties_from_dict = DedicatedCloudServiceProperties.from_dict(dedicated_cloud_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


