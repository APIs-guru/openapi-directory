# ListCatalogsResponse

Response message for the ListCatalogs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[Catalog]**](Catalog.md) | The catalogs from the specified project. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_catalogs_response import ListCatalogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogsResponse from a JSON string
list_catalogs_response_instance = ListCatalogsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCatalogsResponse.to_json())

# convert the object into a dict
list_catalogs_response_dict = list_catalogs_response_instance.to_dict()
# create an instance of ListCatalogsResponse from a dict
list_catalogs_response_from_dict = ListCatalogsResponse.from_dict(list_catalogs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


