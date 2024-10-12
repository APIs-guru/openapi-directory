# UpdateOperationRequest

Request for updating an existing operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Operation**](Operation.md) |  | [optional] 
**update_mask** | **str** | The fields to update. | [optional] 

## Example

```python
from openapi_client.models.update_operation_request import UpdateOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOperationRequest from a JSON string
update_operation_request_instance = UpdateOperationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOperationRequest.to_json())

# convert the object into a dict
update_operation_request_dict = update_operation_request_instance.to_dict()
# create an instance of UpdateOperationRequest from a dict
update_operation_request_from_dict = UpdateOperationRequest.from_dict(update_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


