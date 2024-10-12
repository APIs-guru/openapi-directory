# ProviderResourceType

Resource type managed by the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**List[AliasType]**](AliasType.md) | The aliases that are supported by this resource type. | [optional] 
**api_versions** | **List[str]** | The api version. | [optional] 
**locations** | **List[str]** | The collection of locations where this resource type can be created in. | [optional] 
**properties** | **Dict[str, str]** | The properties. | [optional] 
**resource_type** | **str** | The resource type. | [optional] 

## Example

```python
from openapi_client.models.provider_resource_type import ProviderResourceType

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderResourceType from a JSON string
provider_resource_type_instance = ProviderResourceType.from_json(json)
# print the JSON string representation of the object
print(ProviderResourceType.to_json())

# convert the object into a dict
provider_resource_type_dict = provider_resource_type_instance.to_dict()
# create an instance of ProviderResourceType from a dict
provider_resource_type_from_dict = ProviderResourceType.from_dict(provider_resource_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


