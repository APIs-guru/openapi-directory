# PostQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialect** | [**Dialect**](Dialect.md) |  | [optional] 
**extern** | [**File**](File.md) |  | [optional] 
**now** | **datetime** | Specifies the time that should be reported as \&quot;now\&quot; in the query. Default is the server&#39;s now time. | [optional] 
**params** | **Dict[str, object]** | Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)  | [optional] 
**query** | **str** | InfluxQL query execute. | 
**type** | **str** | The type of query. Must be \&quot;flux\&quot;. | [optional] 
**bucket** | **str** | Bucket is to be used instead of the database and retention policy specified in the InfluxQL query. | [optional] 

## Example

```python
from openapi_client.models.post_query_request import PostQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostQueryRequest from a JSON string
post_query_request_instance = PostQueryRequest.from_json(json)
# print the JSON string representation of the object
print(PostQueryRequest.to_json())

# convert the object into a dict
post_query_request_dict = post_query_request_instance.to_dict()
# create an instance of PostQueryRequest from a dict
post_query_request_from_dict = PostQueryRequest.from_dict(post_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


