# QueryLabelsRequest

QueryLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 
**match** | **str** | A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. | [optional] 
**start** | **str** | The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. | [optional] 

## Example

```python
from openapi_client.models.query_labels_request import QueryLabelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryLabelsRequest from a JSON string
query_labels_request_instance = QueryLabelsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryLabelsRequest.to_json())

# convert the object into a dict
query_labels_request_dict = query_labels_request_instance.to_dict()
# create an instance of QueryLabelsRequest from a dict
query_labels_request_from_dict = QueryLabelsRequest.from_dict(query_labels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


