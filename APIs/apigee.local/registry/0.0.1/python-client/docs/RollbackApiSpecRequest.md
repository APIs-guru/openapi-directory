# RollbackApiSpecRequest

Request message for RollbackApiSpec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The spec being rolled back. | 
**revision_id** | **str** | Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8 | 

## Example

```python
from openapi_client.models.rollback_api_spec_request import RollbackApiSpecRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackApiSpecRequest from a JSON string
rollback_api_spec_request_instance = RollbackApiSpecRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackApiSpecRequest.to_json())

# convert the object into a dict
rollback_api_spec_request_dict = rollback_api_spec_request_instance.to_dict()
# create an instance of RollbackApiSpecRequest from a dict
rollback_api_spec_request_from_dict = RollbackApiSpecRequest.from_dict(rollback_api_spec_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


