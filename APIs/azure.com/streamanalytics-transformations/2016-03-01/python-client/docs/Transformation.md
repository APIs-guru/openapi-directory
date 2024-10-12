# Transformation

A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransformationProperties**](TransformationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.transformation import Transformation

# TODO update the JSON string below
json = "{}"
# create an instance of Transformation from a JSON string
transformation_instance = Transformation.from_json(json)
# print the JSON string representation of the object
print(Transformation.to_json())

# convert the object into a dict
transformation_dict = transformation_instance.to_dict()
# create an instance of Transformation from a dict
transformation_from_dict = Transformation.from_dict(transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


