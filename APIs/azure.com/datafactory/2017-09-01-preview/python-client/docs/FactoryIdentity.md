# FactoryIdentity

Identity properties of the factory resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the identity. | [optional] [readonly] 
**tenant_id** | **str** | The client tenant id of the identity. | [optional] [readonly] 
**type** | **str** | The identity type. Currently the only supported type is &#39;SystemAssigned&#39;. | 

## Example

```python
from openapi_client.models.factory_identity import FactoryIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryIdentity from a JSON string
factory_identity_instance = FactoryIdentity.from_json(json)
# print the JSON string representation of the object
print(FactoryIdentity.to_json())

# convert the object into a dict
factory_identity_dict = factory_identity_instance.to_dict()
# create an instance of FactoryIdentity from a dict
factory_identity_from_dict = FactoryIdentity.from_dict(factory_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


