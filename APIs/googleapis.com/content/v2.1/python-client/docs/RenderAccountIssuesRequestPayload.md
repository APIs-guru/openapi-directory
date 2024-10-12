# RenderAccountIssuesRequestPayload

The payload for configuring how the content should be rendered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_option** | **str** | Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. | [optional] 

## Example

```python
from openapi_client.models.render_account_issues_request_payload import RenderAccountIssuesRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RenderAccountIssuesRequestPayload from a JSON string
render_account_issues_request_payload_instance = RenderAccountIssuesRequestPayload.from_json(json)
# print the JSON string representation of the object
print(RenderAccountIssuesRequestPayload.to_json())

# convert the object into a dict
render_account_issues_request_payload_dict = render_account_issues_request_payload_instance.to_dict()
# create an instance of RenderAccountIssuesRequestPayload from a dict
render_account_issues_request_payload_from_dict = RenderAccountIssuesRequestPayload.from_dict(render_account_issues_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


