# ProvisionedResourceProperties

Describes common properties of a provisioned resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provisioned_resource_properties import ProvisionedResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionedResourceProperties from a JSON string
provisioned_resource_properties_instance = ProvisionedResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ProvisionedResourceProperties.to_json())

# convert the object into a dict
provisioned_resource_properties_dict = provisioned_resource_properties_instance.to_dict()
# create an instance of ProvisionedResourceProperties from a dict
provisioned_resource_properties_from_dict = ProvisionedResourceProperties.from_dict(provisioned_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


