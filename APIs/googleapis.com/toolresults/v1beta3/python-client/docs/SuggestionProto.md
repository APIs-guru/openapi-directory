# SuggestionProto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**help_url** | **str** | Reference to a help center article concerning this type of suggestion. Always set. | [optional] 
**long_message** | [**SafeHtmlProto**](SafeHtmlProto.md) |  | [optional] 
**priority** | **str** | Relative importance of a suggestion. Always set. | [optional] 
**pseudo_resource_id** | **str** | A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath. | [optional] 
**region** | [**RegionProto**](RegionProto.md) |  | [optional] 
**resource_name** | **str** | Reference to a view element, identified by its resource name, if it has one. | [optional] 
**screen_id** | **str** | ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id \&quot;1\&quot; corresponds to \&quot;1.png\&quot; file in GCS. Always set. | [optional] 
**secondary_priority** | **float** | Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional. | [optional] 
**short_message** | [**SafeHtmlProto**](SafeHtmlProto.md) |  | [optional] 
**title** | **str** | General title for the suggestion, in the user&#39;s language, without markup. Always set. | [optional] 

## Example

```python
from openapi_client.models.suggestion_proto import SuggestionProto

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestionProto from a JSON string
suggestion_proto_instance = SuggestionProto.from_json(json)
# print the JSON string representation of the object
print(SuggestionProto.to_json())

# convert the object into a dict
suggestion_proto_dict = suggestion_proto_instance.to_dict()
# create an instance of SuggestionProto from a dict
suggestion_proto_from_dict = SuggestionProto.from_dict(suggestion_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


