# RollbackRequest

The request for Datastore.Rollback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | The ID of the database against which to make the request. &#39;(default)&#39; is not allowed; please use empty string &#39;&#39; to refer the default database. | [optional] 
**transaction** | **bytearray** | Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. | [optional] 

## Example

```python
from openapi_client.models.rollback_request import RollbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackRequest from a JSON string
rollback_request_instance = RollbackRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackRequest.to_json())

# convert the object into a dict
rollback_request_dict = rollback_request_instance.to_dict()
# create an instance of RollbackRequest from a dict
rollback_request_from_dict = RollbackRequest.from_dict(rollback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


