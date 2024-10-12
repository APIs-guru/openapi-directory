# InterpolationBoundary

The time range to the left and right of the search span to be used for Interpolation. This is helpful in scenarios where the data points are missing close to the start or end of the input search span. Can be null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**span** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.interpolation_boundary import InterpolationBoundary

# TODO update the JSON string below
json = "{}"
# create an instance of InterpolationBoundary from a JSON string
interpolation_boundary_instance = InterpolationBoundary.from_json(json)
# print the JSON string representation of the object
print(InterpolationBoundary.to_json())

# convert the object into a dict
interpolation_boundary_dict = interpolation_boundary_instance.to_dict()
# create an instance of InterpolationBoundary from a dict
interpolation_boundary_from_dict = InterpolationBoundary.from_dict(interpolation_boundary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


