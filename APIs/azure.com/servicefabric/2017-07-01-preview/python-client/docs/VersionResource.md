# VersionResource

A version resource for the specified application type name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VersionProperties**](VersionProperties.md) |  | [optional] 
**id** | **str** | Azure resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_resource import VersionResource

# TODO update the JSON string below
json = "{}"
# create an instance of VersionResource from a JSON string
version_resource_instance = VersionResource.from_json(json)
# print the JSON string representation of the object
print(VersionResource.to_json())

# convert the object into a dict
version_resource_dict = version_resource_instance.to_dict()
# create an instance of VersionResource from a dict
version_resource_from_dict = VersionResource.from_dict(version_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


