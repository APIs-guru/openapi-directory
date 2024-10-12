# DepreciationPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**similar_models** | [**List[DepreciationStats]**](DepreciationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.depreciation_point import DepreciationPoint

# TODO update the JSON string below
json = "{}"
# create an instance of DepreciationPoint from a JSON string
depreciation_point_instance = DepreciationPoint.from_json(json)
# print the JSON string representation of the object
print(DepreciationPoint.to_json())

# convert the object into a dict
depreciation_point_dict = depreciation_point_instance.to_dict()
# create an instance of DepreciationPoint from a dict
depreciation_point_from_dict = DepreciationPoint.from_dict(depreciation_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


