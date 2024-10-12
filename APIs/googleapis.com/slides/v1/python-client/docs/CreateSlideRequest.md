# CreateSlideRequest

Creates a slide.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insertion_index** | **int** | The optional zero-based index indicating where to insert the slides. If you don&#39;t specify an index, the slide is created at the end. | [optional] 
**object_id** | **str** | A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The ID length must be between 5 and 50 characters, inclusive. If you don&#39;t specify an ID, a unique one is generated. | [optional] 
**placeholder_id_mappings** | [**List[LayoutPlaceholderIdMapping]**](LayoutPlaceholderIdMapping.md) | An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when &#x60;slide_layout_reference&#x60; is specified. | [optional] 
**slide_layout_reference** | [**LayoutReference**](LayoutReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_slide_request import CreateSlideRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSlideRequest from a JSON string
create_slide_request_instance = CreateSlideRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSlideRequest.to_json())

# convert the object into a dict
create_slide_request_dict = create_slide_request_instance.to_dict()
# create an instance of CreateSlideRequest from a dict
create_slide_request_from_dict = CreateSlideRequest.from_dict(create_slide_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


