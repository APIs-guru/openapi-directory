# PackageSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package** | **str** | The Debian source package for which up to 2 search results have been aggregated in &#x60;results&#x60;. | 
**results** | [**List[SearchResult]**](SearchResult.md) |  | 

## Example

```python
from openapi_client.models.package_search_result import PackageSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of PackageSearchResult from a JSON string
package_search_result_instance = PackageSearchResult.from_json(json)
# print the JSON string representation of the object
print(PackageSearchResult.to_json())

# convert the object into a dict
package_search_result_dict = package_search_result_instance.to_dict()
# create an instance of PackageSearchResult from a dict
package_search_result_from_dict = PackageSearchResult.from_dict(package_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


