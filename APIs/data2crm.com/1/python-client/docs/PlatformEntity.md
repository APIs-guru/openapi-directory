# PlatformEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | [**List[Authorization]**](Authorization.md) | Authorization | [optional] 
**name** | **str** | Name | [optional] 
**resource** | **object** |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.platform_entity import PlatformEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformEntity from a JSON string
platform_entity_instance = PlatformEntity.from_json(json)
# print the JSON string representation of the object
print(PlatformEntity.to_json())

# convert the object into a dict
platform_entity_dict = platform_entity_instance.to_dict()
# create an instance of PlatformEntity from a dict
platform_entity_from_dict = PlatformEntity.from_dict(platform_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


