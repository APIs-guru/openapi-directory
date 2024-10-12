# RenderProductIssuesRequestPayload

The payload for configuring how the content should be rendered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_option** | **str** | Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. | [optional] 

## Example

```python
from openapi_client.models.render_product_issues_request_payload import RenderProductIssuesRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RenderProductIssuesRequestPayload from a JSON string
render_product_issues_request_payload_instance = RenderProductIssuesRequestPayload.from_json(json)
# print the JSON string representation of the object
print(RenderProductIssuesRequestPayload.to_json())

# convert the object into a dict
render_product_issues_request_payload_dict = render_product_issues_request_payload_instance.to_dict()
# create an instance of RenderProductIssuesRequestPayload from a dict
render_product_issues_request_payload_from_dict = RenderProductIssuesRequestPayload.from_dict(render_product_issues_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


