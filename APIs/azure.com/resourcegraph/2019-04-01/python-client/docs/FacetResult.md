# FacetResult

Successfully executed facet containing additional statistics on the response of a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of records returned in the facet response. | 
**data** | **object** | A table containing the desired facets. Only present if the facet is valid. | 
**total_records** | **int** | Number of total records in the facet results. | 

## Example

```python
from openapi_client.models.facet_result import FacetResult

# TODO update the JSON string below
json = "{}"
# create an instance of FacetResult from a JSON string
facet_result_instance = FacetResult.from_json(json)
# print the JSON string representation of the object
print(FacetResult.to_json())

# convert the object into a dict
facet_result_dict = facet_result_instance.to_dict()
# create an instance of FacetResult from a dict
facet_result_from_dict = FacetResult.from_dict(facet_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


