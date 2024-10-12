# DomainMapping

Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;domains.cloudrun.com/v1\&quot;. | [optional] 
**kind** | **str** | The kind of resource, in this case \&quot;DomainMapping\&quot;. | [optional] 
**metadata** | [**ObjectMeta**](ObjectMeta.md) |  | [optional] 
**spec** | [**DomainMappingSpec**](DomainMappingSpec.md) |  | [optional] 
**status** | [**DomainMappingStatus**](DomainMappingStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_mapping import DomainMapping

# TODO update the JSON string below
json = "{}"
# create an instance of DomainMapping from a JSON string
domain_mapping_instance = DomainMapping.from_json(json)
# print the JSON string representation of the object
print(DomainMapping.to_json())

# convert the object into a dict
domain_mapping_dict = domain_mapping_instance.to_dict()
# create an instance of DomainMapping from a dict
domain_mapping_from_dict = DomainMapping.from_dict(domain_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


