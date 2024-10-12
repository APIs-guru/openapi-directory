# QueryFailureError

Error definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service specific error code which serves as the substatus for the HTTP error code. | [optional] [readonly] 
**message** | **str** | Description of the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_failure_error import QueryFailureError

# TODO update the JSON string below
json = "{}"
# create an instance of QueryFailureError from a JSON string
query_failure_error_instance = QueryFailureError.from_json(json)
# print the JSON string representation of the object
print(QueryFailureError.to_json())

# convert the object into a dict
query_failure_error_dict = query_failure_error_instance.to_dict()
# create an instance of QueryFailureError from a dict
query_failure_error_from_dict = QueryFailureError.from_dict(query_failure_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


