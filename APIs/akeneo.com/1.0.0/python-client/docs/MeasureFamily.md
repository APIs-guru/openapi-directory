# MeasureFamily


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Measure family code | 
**standard** | **str** | Measure family standard | [optional] 
**units** | [**List[MeasureFamiliesAllOfEmbeddedItemsInnerAllOfUnitsInner]**](MeasureFamiliesAllOfEmbeddedItemsInnerAllOfUnitsInner.md) | Family units | [optional] 

## Example

```python
from openapi_client.models.measure_family import MeasureFamily

# TODO update the JSON string below
json = "{}"
# create an instance of MeasureFamily from a JSON string
measure_family_instance = MeasureFamily.from_json(json)
# print the JSON string representation of the object
print(MeasureFamily.to_json())

# convert the object into a dict
measure_family_dict = measure_family_instance.to_dict()
# create an instance of MeasureFamily from a dict
measure_family_from_dict = MeasureFamily.from_dict(measure_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


