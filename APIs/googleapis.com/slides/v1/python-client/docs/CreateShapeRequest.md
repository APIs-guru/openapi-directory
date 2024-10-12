# CreateShapeRequest

Creates a new shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_properties** | [**PageElementProperties**](PageElementProperties.md) |  | [optional] 
**object_id** | **str** | A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated. | [optional] 
**shape_type** | **str** | The shape type. | [optional] 

## Example

```python
from openapi_client.models.create_shape_request import CreateShapeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShapeRequest from a JSON string
create_shape_request_instance = CreateShapeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateShapeRequest.to_json())

# convert the object into a dict
create_shape_request_dict = create_shape_request_instance.to_dict()
# create an instance of CreateShapeRequest from a dict
create_shape_request_from_dict = CreateShapeRequest.from_dict(create_shape_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


