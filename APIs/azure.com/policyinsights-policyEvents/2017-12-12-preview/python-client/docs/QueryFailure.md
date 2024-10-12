# QueryFailure

Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**QueryFailureError**](QueryFailureError.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_failure import QueryFailure

# TODO update the JSON string below
json = "{}"
# create an instance of QueryFailure from a JSON string
query_failure_instance = QueryFailure.from_json(json)
# print the JSON string representation of the object
print(QueryFailure.to_json())

# convert the object into a dict
query_failure_dict = query_failure_instance.to_dict()
# create an instance of QueryFailure from a dict
query_failure_from_dict = QueryFailure.from_dict(query_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


