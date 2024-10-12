# CreateLineRequest

Creates a line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the line to be created. The exact line type created is determined based on the category and how it&#39;s routed to connect to other page elements. If you specify both a &#x60;category&#x60; and a &#x60;line_category&#x60;, the &#x60;category&#x60; takes precedence. If you do not specify a value for &#x60;category&#x60;, but specify a value for &#x60;line_category&#x60;, then the specified &#x60;line_category&#x60; value is used. If you do not specify either, then STRAIGHT is used. | [optional] 
**element_properties** | [**PageElementProperties**](PageElementProperties.md) |  | [optional] 
**line_category** | **str** | The category of the line to be created. *Deprecated*: use &#x60;category&#x60; instead. The exact line type created is determined based on the category and how it&#39;s routed to connect to other page elements. If you specify both a &#x60;category&#x60; and a &#x60;line_category&#x60;, the &#x60;category&#x60; takes precedence. | [optional] 
**object_id** | **str** | A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If you don&#39;t specify an ID, a unique one is generated. | [optional] 

## Example

```python
from openapi_client.models.create_line_request import CreateLineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLineRequest from a JSON string
create_line_request_instance = CreateLineRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLineRequest.to_json())

# convert the object into a dict
create_line_request_dict = create_line_request_instance.to_dict()
# create an instance of CreateLineRequest from a dict
create_line_request_from_dict = CreateLineRequest.from_dict(create_line_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


