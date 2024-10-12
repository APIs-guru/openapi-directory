# Log


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_style** | **str** | Indicates if the request was made via REST or Graphql endpoint. | 
**base_url** | **str** | The Apideck base URL the request was made to. | 
**child_request** | **bool** | Indicates whether or not this is a child or parent request. | 
**consumer_id** | **str** | The consumer Id associated with the request. | 
**duration** | **float** | The entire execution time in milliseconds it took to call the Apideck service provider. | 
**error_message** | **str** | If error occurred, this is brief explanation | [optional] 
**execution** | **int** | The entire execution time in milliseconds it took to make the request. | 
**has_children** | **bool** | When request is a parent request, this indicates if there are child requests associated. | 
**http_method** | **str** | HTTP Method of request. | 
**id** | **str** | UUID acting as Request Identifier. | 
**latency** | **float** | Latency added by making this request via Unified Api. | 
**operation** | [**LogOperation**](LogOperation.md) |  | 
**parent_id** | **str** | When request is a child request, this UUID indicates it&#39;s parent request. | 
**path** | **str** | The path component of the URI the request was made to. | 
**sandbox** | **bool** | Indicates whether the request was made using Apidecks sandbox credentials or not. | 
**service** | [**LogService**](LogService.md) |  | 
**source_ip** | **str** | The IP address of the source of the request. | [optional] 
**status_code** | **int** | HTTP Status code that was returned. | 
**success** | **bool** | Whether or not the request was successful. | 
**timestamp** | **str** | ISO Date and time when the request was made. | 
**unified_api** | **str** | Which Unified Api request was made to. | 

## Example

```python
from openapi_client.models.log import Log

# TODO update the JSON string below
json = "{}"
# create an instance of Log from a JSON string
log_instance = Log.from_json(json)
# print the JSON string representation of the object
print(Log.to_json())

# convert the object into a dict
log_dict = log_instance.to_dict()
# create an instance of Log from a dict
log_from_dict = Log.from_dict(log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


