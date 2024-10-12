# PaginationLink

Helpful links to other pages of results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**Link**](Link.md) | The link to the first page of results.  This object will _always_ have an &#x60;href&#x60; field. If there are no results, then the first page will contain an empty array of items.  | 
**last** | [**Link**](Link.md) | The link to the final page of results.  This object will _always_ have an &#x60;href&#x60; field. If there are no results, then the final page will contain an empty array of items.  | 
**next** | [**OptionalLink**](OptionalLink.md) | The link to the next page of results.  The &#x60;href&#x60; field will only be set when the &#x60;page&#x60; is less than &#x60;pages&#x60;.  | 
**prev** | [**OptionalLink**](OptionalLink.md) | The link to the previous page of results.  The &#x60;href&#x60; field will only be set when the &#x60;page&#x60; is 2 or greater.  | 

## Example

```python
from openapi_client.models.pagination_link import PaginationLink

# TODO update the JSON string below
json = "{}"
# create an instance of PaginationLink from a JSON string
pagination_link_instance = PaginationLink.from_json(json)
# print the JSON string representation of the object
print(PaginationLink.to_json())

# convert the object into a dict
pagination_link_dict = pagination_link_instance.to_dict()
# create an instance of PaginationLink from a dict
pagination_link_from_dict = PaginationLink.from_dict(pagination_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


