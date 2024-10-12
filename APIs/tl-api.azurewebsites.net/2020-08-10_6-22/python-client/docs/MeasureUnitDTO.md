# MeasureUnitDTO

Mesure unit to represent article mesure unit 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id of the table | [optional] 
**name** | **str** | Mesure Unit Type | [optional] 
**type** | **str** | Type of the article used with (all, service, item) | [optional] 

## Example

```python
from openapi_client.models.measure_unit_dto import MeasureUnitDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MeasureUnitDTO from a JSON string
measure_unit_dto_instance = MeasureUnitDTO.from_json(json)
# print the JSON string representation of the object
print(MeasureUnitDTO.to_json())

# convert the object into a dict
measure_unit_dto_dict = measure_unit_dto_instance.to_dict()
# create an instance of MeasureUnitDTO from a dict
measure_unit_dto_from_dict = MeasureUnitDTO.from_dict(measure_unit_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


