# CloudResource

The resource on GCP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Output only. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc. | [optional] [readonly] 
**name** | **str** | Output only. resource name | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_resource import CloudResource

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResource from a JSON string
cloud_resource_instance = CloudResource.from_json(json)
# print the JSON string representation of the object
print(CloudResource.to_json())

# convert the object into a dict
cloud_resource_dict = cloud_resource_instance.to_dict()
# create an instance of CloudResource from a dict
cloud_resource_from_dict = CloudResource.from_dict(cloud_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


