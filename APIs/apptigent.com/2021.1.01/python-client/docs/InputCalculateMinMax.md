# InputCalculateMinMax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[float]** | Colllection of values to calculate | 
**type** | **str** | Minimum or Maximum | [default to 'Minimum']

## Example

```python
from openapi_client.models.input_calculate_min_max import InputCalculateMinMax

# TODO update the JSON string below
json = "{}"
# create an instance of InputCalculateMinMax from a JSON string
input_calculate_min_max_instance = InputCalculateMinMax.from_json(json)
# print the JSON string representation of the object
print(InputCalculateMinMax.to_json())

# convert the object into a dict
input_calculate_min_max_dict = input_calculate_min_max_instance.to_dict()
# create an instance of InputCalculateMinMax from a dict
input_calculate_min_max_from_dict = InputCalculateMinMax.from_dict(input_calculate_min_max_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


