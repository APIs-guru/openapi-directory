# FacetBucket

A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned. | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**percentage** | **int** | Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts. | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.facet_bucket import FacetBucket

# TODO update the JSON string below
json = "{}"
# create an instance of FacetBucket from a JSON string
facet_bucket_instance = FacetBucket.from_json(json)
# print the JSON string representation of the object
print(FacetBucket.to_json())

# convert the object into a dict
facet_bucket_dict = facet_bucket_instance.to_dict()
# create an instance of FacetBucket from a dict
facet_bucket_from_dict = FacetBucket.from_dict(facet_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


