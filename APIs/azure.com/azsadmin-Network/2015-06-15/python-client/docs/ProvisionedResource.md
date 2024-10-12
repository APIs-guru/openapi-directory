# ProvisionedResource

Objects which have a provisioning state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provisioned_resource import ProvisionedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionedResource from a JSON string
provisioned_resource_instance = ProvisionedResource.from_json(json)
# print the JSON string representation of the object
print(ProvisionedResource.to_json())

# convert the object into a dict
provisioned_resource_dict = provisioned_resource_instance.to_dict()
# create an instance of ProvisionedResource from a dict
provisioned_resource_from_dict = ProvisionedResource.from_dict(provisioned_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


