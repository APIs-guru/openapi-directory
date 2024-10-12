# Link

Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Target URL of a link. Example: \&quot;http://example.com/previous\&quot;. | [optional] 
**hreflang** | **str** | Language code of a link. Example: \&quot;en\&quot;. | [optional] 
**media** | **str** | Media type of the link destination. Example: \&quot;screen\&quot;. | [optional] 
**rel** | **str** | Relation type of a link. Example: \&quot;previous\&quot;. | [optional] 
**title** | **str** | Title of this link. Example: \&quot;title\&quot;. | [optional] 
**type** | **str** | Content type of the link. Example: \&quot;application/json\&quot;. | [optional] 
**value** | **str** | URL giving context for the link. Example: \&quot;http://example.com/current\&quot;. | [optional] 

## Example

```python
from openapi_client.models.link import Link

# TODO update the JSON string below
json = "{}"
# create an instance of Link from a JSON string
link_instance = Link.from_json(json)
# print the JSON string representation of the object
print(Link.to_json())

# convert the object into a dict
link_dict = link_instance.to_dict()
# create an instance of Link from a dict
link_from_dict = Link.from_dict(link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


