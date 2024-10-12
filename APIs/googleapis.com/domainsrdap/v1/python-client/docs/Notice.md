# Notice

Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **List[str]** | Description of the notice. | [optional] 
**links** | [**List[Link]**](Link.md) | Link to a document containing more information. | [optional] 
**title** | **str** | Title of a notice. Example: \&quot;Terms of Service\&quot;. | [optional] 
**type** | **str** | Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: \&quot;result set truncated due to authorization\&quot;, \&quot;result set truncated due to excessive load\&quot;, \&quot;result set truncated due to unexplainable reasons\&quot;. | [optional] 

## Example

```python
from openapi_client.models.notice import Notice

# TODO update the JSON string below
json = "{}"
# create an instance of Notice from a JSON string
notice_instance = Notice.from_json(json)
# print the JSON string representation of the object
print(Notice.to_json())

# convert the object into a dict
notice_dict = notice_instance.to_dict()
# create an instance of Notice from a dict
notice_from_dict = Notice.from_dict(notice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


