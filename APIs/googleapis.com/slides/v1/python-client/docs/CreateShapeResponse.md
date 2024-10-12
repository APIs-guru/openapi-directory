# CreateShapeResponse

The result of creating a shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created shape. | [optional] 

## Example

```python
from openapi_client.models.create_shape_response import CreateShapeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShapeResponse from a JSON string
create_shape_response_instance = CreateShapeResponse.from_json(json)
# print the JSON string representation of the object
print(CreateShapeResponse.to_json())

# convert the object into a dict
create_shape_response_dict = create_shape_response_instance.to_dict()
# create an instance of CreateShapeResponse from a dict
create_shape_response_from_dict = CreateShapeResponse.from_dict(create_shape_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


