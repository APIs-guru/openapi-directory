# FacetResult

Source specific facet response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[FacetBucket]**](FacetBucket.md) | FacetBuckets for values in response containing at least a single result with the corresponding filter. | [optional] 
**object_type** | **str** | Object type for which facet results are returned. Can be empty. | [optional] 
**operator_name** | **str** | The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions | [optional] 
**source_name** | **str** | Source name for which facet results are returned. Will not be empty. | [optional] 

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


