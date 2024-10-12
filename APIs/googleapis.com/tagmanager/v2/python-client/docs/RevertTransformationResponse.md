# RevertTransformationResponse

The result of reverting a transformation in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transformation** | [**Transformation**](Transformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_transformation_response import RevertTransformationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertTransformationResponse from a JSON string
revert_transformation_response_instance = RevertTransformationResponse.from_json(json)
# print the JSON string representation of the object
print(RevertTransformationResponse.to_json())

# convert the object into a dict
revert_transformation_response_dict = revert_transformation_response_instance.to_dict()
# create an instance of RevertTransformationResponse from a dict
revert_transformation_response_from_dict = RevertTransformationResponse.from_dict(revert_transformation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


