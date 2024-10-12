# RegionHealth

Contains information related to the health of a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegionHealthModel**](RegionHealthModel.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.region_health import RegionHealth

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealth from a JSON string
region_health_instance = RegionHealth.from_json(json)
# print the JSON string representation of the object
print(RegionHealth.to_json())

# convert the object into a dict
region_health_dict = region_health_instance.to_dict()
# create an instance of RegionHealth from a dict
region_health_from_dict = RegionHealth.from_dict(region_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


