# HistogramQuery

The histogram request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histogram_query** | **str** | An expression specifies a histogram request against matching jobs for searches. See SearchJobsRequest.histogram_queries for details about syntax. | [optional] 

## Example

```python
from openapi_client.models.histogram_query import HistogramQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramQuery from a JSON string
histogram_query_instance = HistogramQuery.from_json(json)
# print the JSON string representation of the object
print(HistogramQuery.to_json())

# convert the object into a dict
histogram_query_dict = histogram_query_instance.to_dict()
# create an instance of HistogramQuery from a dict
histogram_query_from_dict = HistogramQuery.from_dict(histogram_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


