# SearchData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demo** | **bool** | true &#x3D; searches only the first 100,000 faces, good for testing/debugging | [optional] 
**id_captcha** | **str** | captcha is not used | [optional] 
**id_search** | **str** |  | [optional] 
**status_only** | **bool** | true &#x3D; don&#39;t submit a new search | [optional] 
**with_progress** | **bool** | true &#x3D; return imediately with a progress. False waits until search is finished. | [optional] 

## Example

```python
from openapi_client.models.search_data import SearchData

# TODO update the JSON string below
json = "{}"
# create an instance of SearchData from a JSON string
search_data_instance = SearchData.from_json(json)
# print the JSON string representation of the object
print(SearchData.to_json())

# convert the object into a dict
search_data_dict = search_data_instance.to_dict()
# create an instance of SearchData from a dict
search_data_from_dict = SearchData.from_dict(search_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


