# PrivateCloud

Private cloud model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure Id, e.g. \&quot;/subscriptions/4da99247-a172-4ed6-8ae9-ebed2d12f839/providers/Microsoft.VMwareCloudSimple/privateClouds/cloud123\&quot; | [optional] 
**location** | **str** | Location where private cloud created, e.g \&quot;westus\&quot; | [optional] 
**name** | **str** | Private cloud name | [optional] 
**properties** | [**PrivateCloudProperties**](PrivateCloudProperties.md) |  | [optional] 
**type** | **str** | Azure Resource type | [optional] 

## Example

```python
from openapi_client.models.private_cloud import PrivateCloud

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCloud from a JSON string
private_cloud_instance = PrivateCloud.from_json(json)
# print the JSON string representation of the object
print(PrivateCloud.to_json())

# convert the object into a dict
private_cloud_dict = private_cloud_instance.to_dict()
# create an instance of PrivateCloud from a dict
private_cloud_from_dict = PrivateCloud.from_dict(private_cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


