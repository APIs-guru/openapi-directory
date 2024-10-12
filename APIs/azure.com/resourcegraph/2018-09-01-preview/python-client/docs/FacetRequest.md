# FacetRequest

A request to compute additional statistics (facets) over the query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | The column or list of columns to summarize by | 
**options** | [**FacetRequestOptions**](FacetRequestOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.facet_request import FacetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FacetRequest from a JSON string
facet_request_instance = FacetRequest.from_json(json)
# print the JSON string representation of the object
print(FacetRequest.to_json())

# convert the object into a dict
facet_request_dict = facet_request_instance.to_dict()
# create an instance of FacetRequest from a dict
facet_request_from_dict = FacetRequest.from_dict(facet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


