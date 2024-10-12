# VersionedResource

Resource representation as defined by the corresponding service providing the resource for a given API version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **Dict[str, object]** | JSON representation of the resource as defined by the corresponding service providing this resource. Example: If the resource is an instance provided by Compute Engine, this field will contain the JSON representation of the instance as defined by Compute Engine: &#x60;https://cloud.google.com/compute/docs/reference/rest/v1/instances&#x60;. You can find the resource definition for each supported resource type in this table: &#x60;https://cloud.google.com/asset-inventory/docs/supported-asset-types&#x60; | [optional] 
**version** | **str** | API version of the resource. Example: If the resource is an instance provided by Compute Engine v1 API as defined in &#x60;https://cloud.google.com/compute/docs/reference/rest/v1/instances&#x60;, version will be \&quot;v1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.versioned_resource import VersionedResource

# TODO update the JSON string below
json = "{}"
# create an instance of VersionedResource from a JSON string
versioned_resource_instance = VersionedResource.from_json(json)
# print the JSON string representation of the object
print(VersionedResource.to_json())

# convert the object into a dict
versioned_resource_dict = versioned_resource_instance.to_dict()
# create an instance of VersionedResource from a dict
versioned_resource_from_dict = VersionedResource.from_dict(versioned_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


