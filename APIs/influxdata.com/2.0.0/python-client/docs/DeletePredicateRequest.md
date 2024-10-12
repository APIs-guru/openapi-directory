# DeletePredicateRequest

The delete predicate request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predicate** | **str** | InfluxQL-like delete statement | [optional] 
**start** | **datetime** | RFC3339Nano | 
**stop** | **datetime** | RFC3339Nano | 

## Example

```python
from openapi_client.models.delete_predicate_request import DeletePredicateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePredicateRequest from a JSON string
delete_predicate_request_instance = DeletePredicateRequest.from_json(json)
# print the JSON string representation of the object
print(DeletePredicateRequest.to_json())

# convert the object into a dict
delete_predicate_request_dict = delete_predicate_request_instance.to_dict()
# create an instance of DeletePredicateRequest from a dict
delete_predicate_request_from_dict = DeletePredicateRequest.from_dict(delete_predicate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


