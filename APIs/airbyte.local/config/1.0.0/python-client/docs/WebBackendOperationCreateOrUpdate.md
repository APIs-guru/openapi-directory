# WebBackendOperationCreateOrUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**operation_id** | **str** |  | [optional] 
**operator_configuration** | [**OperatorConfiguration**](OperatorConfiguration.md) |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.web_backend_operation_create_or_update import WebBackendOperationCreateOrUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendOperationCreateOrUpdate from a JSON string
web_backend_operation_create_or_update_instance = WebBackendOperationCreateOrUpdate.from_json(json)
# print the JSON string representation of the object
print(WebBackendOperationCreateOrUpdate.to_json())

# convert the object into a dict
web_backend_operation_create_or_update_dict = web_backend_operation_create_or_update_instance.to_dict()
# create an instance of WebBackendOperationCreateOrUpdate from a dict
web_backend_operation_create_or_update_from_dict = WebBackendOperationCreateOrUpdate.from_dict(web_backend_operation_create_or_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


