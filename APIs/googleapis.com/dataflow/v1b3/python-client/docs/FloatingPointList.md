# FloatingPointList

A metric value representing a list of floating point numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | **List[float]** | Elements of the list. | [optional] 

## Example

```python
from openapi_client.models.floating_point_list import FloatingPointList

# TODO update the JSON string below
json = "{}"
# create an instance of FloatingPointList from a JSON string
floating_point_list_instance = FloatingPointList.from_json(json)
# print the JSON string representation of the object
print(FloatingPointList.to_json())

# convert the object into a dict
floating_point_list_dict = floating_point_list_instance.to_dict()
# create an instance of FloatingPointList from a dict
floating_point_list_from_dict = FloatingPointList.from_dict(floating_point_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


