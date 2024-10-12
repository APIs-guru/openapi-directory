# GroupedResult

Information about the products similar to a single product in a query image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**object_annotations** | [**List[ObjectAnnotation]**](ObjectAnnotation.md) | List of generic predictions for the object in the bounding box. | [optional] 
**results** | [**List[Result]**](Result.md) | List of results, one for each product match. | [optional] 

## Example

```python
from openapi_client.models.grouped_result import GroupedResult

# TODO update the JSON string below
json = "{}"
# create an instance of GroupedResult from a JSON string
grouped_result_instance = GroupedResult.from_json(json)
# print the JSON string representation of the object
print(GroupedResult.to_json())

# convert the object into a dict
grouped_result_dict = grouped_result_instance.to_dict()
# create an instance of GroupedResult from a dict
grouped_result_from_dict = GroupedResult.from_dict(grouped_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


