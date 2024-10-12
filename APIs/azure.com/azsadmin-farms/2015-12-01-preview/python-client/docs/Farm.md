# Farm

Storage farm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FarmProperties**](FarmProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource Name. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.farm import Farm

# TODO update the JSON string below
json = "{}"
# create an instance of Farm from a JSON string
farm_instance = Farm.from_json(json)
# print the JSON string representation of the object
print(Farm.to_json())

# convert the object into a dict
farm_dict = farm_instance.to_dict()
# create an instance of Farm from a dict
farm_from_dict = Farm.from_dict(farm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


