# FilterCriteria

Message matching criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_chats** | **bool** | Whether the response should exclude chats. | [optional] 
**var_from** | **str** | The sender&#39;s display name or email address. | [optional] 
**has_attachment** | **bool** | Whether the message has any attachment. | [optional] 
**negated_query** | **str** | Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, &#x60;\&quot;from:someuser@example.com rfc822msgid: is:unread\&quot;&#x60;. | [optional] 
**query** | **str** | Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, &#x60;\&quot;from:someuser@example.com rfc822msgid: is:unread\&quot;&#x60;. | [optional] 
**size** | **int** | The size of the entire RFC822 message in bytes, including all headers and attachments. | [optional] 
**size_comparison** | **str** | How the message size in bytes should be in relation to the size field. | [optional] 
**subject** | **str** | Case-insensitive phrase found in the message&#39;s subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed. | [optional] 
**to** | **str** | The recipient&#39;s display name or email address. Includes recipients in the \&quot;to\&quot;, \&quot;cc\&quot;, and \&quot;bcc\&quot; header fields. You can use simply the local part of the email address. For example, \&quot;example\&quot; and \&quot;example@\&quot; both match \&quot;example@gmail.com\&quot;. This field is case-insensitive. | [optional] 

## Example

```python
from openapi_client.models.filter_criteria import FilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of FilterCriteria from a JSON string
filter_criteria_instance = FilterCriteria.from_json(json)
# print the JSON string representation of the object
print(FilterCriteria.to_json())

# convert the object into a dict
filter_criteria_dict = filter_criteria_instance.to_dict()
# create an instance of FilterCriteria from a dict
filter_criteria_from_dict = FilterCriteria.from_dict(filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


