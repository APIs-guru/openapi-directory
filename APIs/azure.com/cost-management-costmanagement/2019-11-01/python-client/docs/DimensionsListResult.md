# DimensionsListResult

Result of listing dimensions. It contains a list of available dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Dimension]**](Dimension.md) | The list of dimensions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dimensions_list_result import DimensionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionsListResult from a JSON string
dimensions_list_result_instance = DimensionsListResult.from_json(json)
# print the JSON string representation of the object
print(DimensionsListResult.to_json())

# convert the object into a dict
dimensions_list_result_dict = dimensions_list_result_instance.to_dict()
# create an instance of DimensionsListResult from a dict
dimensions_list_result_from_dict = DimensionsListResult.from_dict(dimensions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


