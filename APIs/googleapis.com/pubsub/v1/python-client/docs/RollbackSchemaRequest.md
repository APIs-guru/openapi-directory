# RollbackSchemaRequest

Request for the `RollbackSchema` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision_id** | **str** | Required. The revision ID to roll back to. It must be a revision of the same schema. Example: c7cfa2a8 | [optional] 

## Example

```python
from openapi_client.models.rollback_schema_request import RollbackSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackSchemaRequest from a JSON string
rollback_schema_request_instance = RollbackSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackSchemaRequest.to_json())

# convert the object into a dict
rollback_schema_request_dict = rollback_schema_request_instance.to_dict()
# create an instance of RollbackSchemaRequest from a dict
rollback_schema_request_from_dict = RollbackSchemaRequest.from_dict(rollback_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


