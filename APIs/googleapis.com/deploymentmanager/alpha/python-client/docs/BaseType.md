# BaseType

BaseType that describes a service-backed Type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_overrides** | [**List[CollectionOverride]**](CollectionOverride.md) | Allows resource handling overrides for specific collections | [optional] 
**credential** | [**Credential**](Credential.md) |  | [optional] 
**descriptor_url** | **str** | Descriptor Url for the this type. | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 

## Example

```python
from openapi_client.models.base_type import BaseType

# TODO update the JSON string below
json = "{}"
# create an instance of BaseType from a JSON string
base_type_instance = BaseType.from_json(json)
# print the JSON string representation of the object
print(BaseType.to_json())

# convert the object into a dict
base_type_dict = base_type_instance.to_dict()
# create an instance of BaseType from a dict
base_type_from_dict = BaseType.from_dict(base_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


