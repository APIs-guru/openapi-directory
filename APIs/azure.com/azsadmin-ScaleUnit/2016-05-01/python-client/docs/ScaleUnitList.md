# ScaleUnitList

A pageable list of scale units.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ScaleUnit]**](ScaleUnit.md) | List of scale units. | [optional] 

## Example

```python
from openapi_client.models.scale_unit_list import ScaleUnitList

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitList from a JSON string
scale_unit_list_instance = ScaleUnitList.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitList.to_json())

# convert the object into a dict
scale_unit_list_dict = scale_unit_list_instance.to_dict()
# create an instance of ScaleUnitList from a dict
scale_unit_list_from_dict = ScaleUnitList.from_dict(scale_unit_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


