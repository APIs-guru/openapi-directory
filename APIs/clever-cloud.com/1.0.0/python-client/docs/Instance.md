# Instance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_flavor** | [**Flavor**](Flavor.md) |  | [optional] 
**coming_soon** | **bool** |  | [optional] [default to False]
**default_env** | **object** |  | 
**default_flavor** | [**Flavor**](Flavor.md) |  | [optional] 
**deployments** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] [default to False]
**flavors** | [**List[Flavor]**](Flavor.md) |  | 
**instance_and_version** | **str** |  | 
**max_allowed_instances** | **int** |  | 
**max_flavor** | [**Flavor**](Flavor.md) |  | 
**max_instances** | **int** |  | 
**min_flavor** | [**Flavor**](Flavor.md) |  | 
**min_instances** | **int** |  | 
**name** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**type** | **str** |  | 
**variant** | [**Variant**](Variant.md) |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


