# Cardinality

A Cardinality condition for the Waiter resource. A cardinality condition is met when the number of variables under a specified path prefix reaches a predefined number. For example, if you set a Cardinality condition where the `path` is set to `/foo` and the number of paths is set to `2`, the following variables would meet the condition in a RuntimeConfig resource: + `/foo/variable1 = \"value1\"` + `/foo/variable2 = \"value2\"` + `/bar/variable3 = \"value3\"` It would not satisfy the same condition with the `number` set to `3`, however, because there is only 2 paths that start with `/foo`. Cardinality conditions are recursive; all subtrees under the specific path prefix are counted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **int** | The number variables under the &#x60;path&#x60; that must exist to meet this condition. Defaults to 1 if not specified. | [optional] 
**path** | **str** | The root of the variable subtree to monitor. For example, &#x60;/foo&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cardinality import Cardinality

# TODO update the JSON string below
json = "{}"
# create an instance of Cardinality from a JSON string
cardinality_instance = Cardinality.from_json(json)
# print the JSON string representation of the object
print(Cardinality.to_json())

# convert the object into a dict
cardinality_dict = cardinality_instance.to_dict()
# create an instance of Cardinality from a dict
cardinality_from_dict = Cardinality.from_dict(cardinality_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


