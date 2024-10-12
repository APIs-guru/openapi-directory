# StorePage

Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of this page. Assigned by the server. Immutable once assigned. | [optional] 
**link** | **List[str]** | Ordered list of pages a user should be able to reach from this page. The list can&#39;t include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn&#39;t verify that the pages exist or the pages are reachable. | [optional] 
**name** | [**List[LocalizedText]**](LocalizedText.md) | Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. | [optional] 

## Example

```python
from openapi_client.models.store_page import StorePage

# TODO update the JSON string below
json = "{}"
# create an instance of StorePage from a JSON string
store_page_instance = StorePage.from_json(json)
# print the JSON string representation of the object
print(StorePage.to_json())

# convert the object into a dict
store_page_dict = store_page_instance.to_dict()
# create an instance of StorePage from a dict
store_page_from_dict = StorePage.from_dict(store_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


