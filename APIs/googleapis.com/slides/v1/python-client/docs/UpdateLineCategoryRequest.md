# UpdateLineCategoryRequest

Updates the category of a line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_category** | **str** | The line category to update to. The exact line type is determined based on the category to update to and how it&#39;s routed to connect to other page elements. | [optional] 
**object_id** | **str** | The object ID of the line the update is applied to. Only a line with a category indicating it is a \&quot;connector\&quot; can be updated. The line may be rerouted after updating its category. | [optional] 

## Example

```python
from openapi_client.models.update_line_category_request import UpdateLineCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLineCategoryRequest from a JSON string
update_line_category_request_instance = UpdateLineCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLineCategoryRequest.to_json())

# convert the object into a dict
update_line_category_request_dict = update_line_category_request_instance.to_dict()
# create an instance of UpdateLineCategoryRequest from a dict
update_line_category_request_from_dict = UpdateLineCategoryRequest.from_dict(update_line_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


