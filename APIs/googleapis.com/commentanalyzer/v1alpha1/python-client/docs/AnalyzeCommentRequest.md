# AnalyzeCommentRequest

The comment analysis request message. Next ID: 11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_token** | **str** | Opaque token that is echoed from the request to the response. | [optional] 
**comment** | [**TextEntry**](TextEntry.md) |  | [optional] 
**community_id** | **str** | Optional identifier associating this AnalyzeCommentRequest with a particular client&#39;s community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients. | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**do_not_store** | **bool** | Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes. | [optional] 
**drop_unsupported_attributes** | **bool** | If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error. | [optional] 
**languages** | **List[str]** | The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service. | [optional] 
**requested_attributes** | [**Dict[str, AttributeParameters]**](AttributeParameters.md) | Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards. | [optional] 
**session_id** | **str** | Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer. | [optional] 
**span_annotations** | **bool** | An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message. | [optional] 

## Example

```python
from openapi_client.models.analyze_comment_request import AnalyzeCommentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeCommentRequest from a JSON string
analyze_comment_request_instance = AnalyzeCommentRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeCommentRequest.to_json())

# convert the object into a dict
analyze_comment_request_dict = analyze_comment_request_instance.to_dict()
# create an instance of AnalyzeCommentRequest from a dict
analyze_comment_request_from_dict = AnalyzeCommentRequest.from_dict(analyze_comment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


