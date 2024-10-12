# QueryExemplarsRequest

QueryExemplarsRequest holds all parameters of the Prometheus upstream API for querying exemplars.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 
**query** | **str** | A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. | [optional] 
**start** | **str** | The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 

## Example

```python
from openapi_client.models.query_exemplars_request import QueryExemplarsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryExemplarsRequest from a JSON string
query_exemplars_request_instance = QueryExemplarsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryExemplarsRequest.to_json())

# convert the object into a dict
query_exemplars_request_dict = query_exemplars_request_instance.to_dict()
# create an instance of QueryExemplarsRequest from a dict
query_exemplars_request_from_dict = QueryExemplarsRequest.from_dict(query_exemplars_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


