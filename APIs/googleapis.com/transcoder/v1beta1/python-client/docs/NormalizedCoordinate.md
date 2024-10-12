# NormalizedCoordinate

2D normalized coordinates. Default: `{0.0, 0.0}`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | Normalized x coordinate. | [optional] 
**y** | **float** | Normalized y coordinate. | [optional] 

## Example

```python
from openapi_client.models.normalized_coordinate import NormalizedCoordinate

# TODO update the JSON string below
json = "{}"
# create an instance of NormalizedCoordinate from a JSON string
normalized_coordinate_instance = NormalizedCoordinate.from_json(json)
# print the JSON string representation of the object
print(NormalizedCoordinate.to_json())

# convert the object into a dict
normalized_coordinate_dict = normalized_coordinate_instance.to_dict()
# create an instance of NormalizedCoordinate from a dict
normalized_coordinate_from_dict = NormalizedCoordinate.from_dict(normalized_coordinate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


