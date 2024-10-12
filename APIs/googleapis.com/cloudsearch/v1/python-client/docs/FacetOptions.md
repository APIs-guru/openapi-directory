# FacetOptions

Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integer_faceting_options** | [**IntegerFacetingOptions**](IntegerFacetingOptions.md) |  | [optional] 
**num_facet_buckets** | **int** | Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100. | [optional] 
**object_type** | **str** | If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets. | [optional] 
**operator_name** | **str** | The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions | [optional] 
**source_name** | **str** | Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used. | [optional] 

## Example

```python
from openapi_client.models.facet_options import FacetOptions

# TODO update the JSON string below
json = "{}"
# create an instance of FacetOptions from a JSON string
facet_options_instance = FacetOptions.from_json(json)
# print the JSON string representation of the object
print(FacetOptions.to_json())

# convert the object into a dict
facet_options_dict = facet_options_instance.to_dict()
# create an instance of FacetOptions from a dict
facet_options_from_dict = FacetOptions.from_dict(facet_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


