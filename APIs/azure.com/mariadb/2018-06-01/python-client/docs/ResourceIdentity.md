# ResourceIdentity

Azure Active Directory identity configuration for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The Azure Active Directory principal id. | [optional] [readonly] 
**tenant_id** | **str** | The Azure Active Directory tenant id. | [optional] [readonly] 
**type** | **str** | The identity type. Set this to &#39;SystemAssigned&#39; in order to automatically create and assign an Azure Active Directory principal for the resource. | [optional] 

## Example

```python
from openapi_client.models.resource_identity import ResourceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceIdentity from a JSON string
resource_identity_instance = ResourceIdentity.from_json(json)
# print the JSON string representation of the object
print(ResourceIdentity.to_json())

# convert the object into a dict
resource_identity_dict = resource_identity_instance.to_dict()
# create an instance of ResourceIdentity from a dict
resource_identity_from_dict = ResourceIdentity.from_dict(resource_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


