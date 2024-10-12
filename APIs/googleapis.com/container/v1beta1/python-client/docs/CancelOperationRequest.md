# CancelOperationRequest

CancelOperationRequest cancels a single operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name (project, location, operation id) of the operation to cancel. Specified in the format &#x60;projects/*/locations/*/operations/*&#x60;. | [optional] 
**operation_id** | **str** | Required. Deprecated. The server-assigned &#x60;name&#x60; of the operation. This field has been deprecated and replaced by the name field. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.cancel_operation_request import CancelOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelOperationRequest from a JSON string
cancel_operation_request_instance = CancelOperationRequest.from_json(json)
# print the JSON string representation of the object
print(CancelOperationRequest.to_json())

# convert the object into a dict
cancel_operation_request_dict = cancel_operation_request_instance.to_dict()
# create an instance of CancelOperationRequest from a dict
cancel_operation_request_from_dict = CancelOperationRequest.from_dict(cancel_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


