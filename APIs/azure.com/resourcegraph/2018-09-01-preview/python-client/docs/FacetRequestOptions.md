# FacetRequestOptions

The options for facet evaluation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top** | **int** | The maximum number of facet rows that should be returned. | [optional] 
**filter** | **str** | Specifies the filter condition for the &#39;where&#39; clause which will be run on main query&#39;s result, just before the actual faceting. | [optional] 
**sort_by** | **str** | The column name or query expression to sort on. Defaults to count if not present. | [optional] 
**sort_order** | **str** | The sorting order by the selected column (count by default). | [optional] [default to 'desc']

## Example

```python
from openapi_client.models.facet_request_options import FacetRequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of FacetRequestOptions from a JSON string
facet_request_options_instance = FacetRequestOptions.from_json(json)
# print the JSON string representation of the object
print(FacetRequestOptions.to_json())

# convert the object into a dict
facet_request_options_dict = facet_request_options_instance.to_dict()
# create an instance of FacetRequestOptions from a dict
facet_request_options_from_dict = FacetRequestOptions.from_dict(facet_request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


