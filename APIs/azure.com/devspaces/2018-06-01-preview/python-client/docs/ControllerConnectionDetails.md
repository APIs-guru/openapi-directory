# ControllerConnectionDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key** | **str** | Authentication key for communicating with services. | [optional] [readonly] 
**orchestrator_specific_connection_details** | [**OrchestratorSpecificConnectionDetails**](OrchestratorSpecificConnectionDetails.md) |  | [optional] 
**workspace_storage_account_name** | **str** | Workspace storage account name. | [optional] [readonly] 
**workspace_storage_sas_token** | **str** | Workspace storage account SAS token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.controller_connection_details import ControllerConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerConnectionDetails from a JSON string
controller_connection_details_instance = ControllerConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(ControllerConnectionDetails.to_json())

# convert the object into a dict
controller_connection_details_dict = controller_connection_details_instance.to_dict()
# create an instance of ControllerConnectionDetails from a dict
controller_connection_details_from_dict = ControllerConnectionDetails.from_dict(controller_connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


