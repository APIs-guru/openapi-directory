# MeasureFamiliesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Measure family code | 
**standard** | **str** | Measure family standard | [optional] 
**units** | [**List[MeasureFamiliesAllOfEmbeddedItemsInnerAllOfUnitsInner]**](MeasureFamiliesAllOfEmbeddedItemsInnerAllOfUnitsInner.md) | Family units | [optional] 

## Example

```python
from openapi_client.models.measure_families_all_of_embedded_items_inner import MeasureFamiliesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MeasureFamiliesAllOfEmbeddedItemsInner from a JSON string
measure_families_all_of_embedded_items_inner_instance = MeasureFamiliesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(MeasureFamiliesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
measure_families_all_of_embedded_items_inner_dict = measure_families_all_of_embedded_items_inner_instance.to_dict()
# create an instance of MeasureFamiliesAllOfEmbeddedItemsInner from a dict
measure_families_all_of_embedded_items_inner_from_dict = MeasureFamiliesAllOfEmbeddedItemsInner.from_dict(measure_families_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


