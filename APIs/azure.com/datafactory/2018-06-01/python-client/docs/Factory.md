# Factory

Factory resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**FactoryIdentity**](FactoryIdentity.md) |  | [optional] 
**properties** | [**FactoryProperties**](FactoryProperties.md) |  | [optional] 
**e_tag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.factory import Factory

# TODO update the JSON string below
json = "{}"
# create an instance of Factory from a JSON string
factory_instance = Factory.from_json(json)
# print the JSON string representation of the object
print(Factory.to_json())

# convert the object into a dict
factory_dict = factory_instance.to_dict()
# create an instance of Factory from a dict
factory_from_dict = Factory.from_dict(factory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


