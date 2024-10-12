# CommitSchemaRequest

Request for CommitSchema method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**ModelSchema**](ModelSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.commit_schema_request import CommitSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitSchemaRequest from a JSON string
commit_schema_request_instance = CommitSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(CommitSchemaRequest.to_json())

# convert the object into a dict
commit_schema_request_dict = commit_schema_request_instance.to_dict()
# create an instance of CommitSchemaRequest from a dict
commit_schema_request_from_dict = CommitSchemaRequest.from_dict(commit_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


