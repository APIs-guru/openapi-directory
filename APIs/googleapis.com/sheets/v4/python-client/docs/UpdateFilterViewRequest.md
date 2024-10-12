# UpdateFilterViewRequest

Updates properties of the filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;filter&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**filter** | [**FilterView**](FilterView.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_filter_view_request import UpdateFilterViewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFilterViewRequest from a JSON string
update_filter_view_request_instance = UpdateFilterViewRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFilterViewRequest.to_json())

# convert the object into a dict
update_filter_view_request_dict = update_filter_view_request_instance.to_dict()
# create an instance of UpdateFilterViewRequest from a dict
update_filter_view_request_from_dict = UpdateFilterViewRequest.from_dict(update_filter_view_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


