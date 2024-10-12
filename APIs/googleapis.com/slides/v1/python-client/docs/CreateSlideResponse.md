# CreateSlideResponse

The result of creating a slide.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created slide. | [optional] 

## Example

```python
from openapi_client.models.create_slide_response import CreateSlideResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSlideResponse from a JSON string
create_slide_response_instance = CreateSlideResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSlideResponse.to_json())

# convert the object into a dict
create_slide_response_dict = create_slide_response_instance.to_dict()
# create an instance of CreateSlideResponse from a dict
create_slide_response_from_dict = CreateSlideResponse.from_dict(create_slide_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


