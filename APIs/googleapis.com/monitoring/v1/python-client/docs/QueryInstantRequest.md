# QueryInstantRequest

QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. | [optional] 
**time** | **str** | The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 
**timeout** | **str** | An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. | [optional] 

## Example

```python
from openapi_client.models.query_instant_request import QueryInstantRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInstantRequest from a JSON string
query_instant_request_instance = QueryInstantRequest.from_json(json)
# print the JSON string representation of the object
print(QueryInstantRequest.to_json())

# convert the object into a dict
query_instant_request_dict = query_instant_request_instance.to_dict()
# create an instance of QueryInstantRequest from a dict
query_instant_request_from_dict = QueryInstantRequest.from_dict(query_instant_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


