# AvailableProviderOperation

Represents available provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**AvailableProviderOperationDisplay**](AvailableProviderOperationDisplay.md) |  | [optional] 
**name** | **str** | The name of the operation being performed on a particular object. Name format: \&quot;{resourceProviderNamespace}/{resourceType}/{read|write|delete|action}\&quot;. Eg. Microsoft.StorSimple/managers/devices/volumeContainers/read, Microsoft.StorSimple/managers/devices/alerts/clearAlerts/action | [optional] 
**origin** | **str** | The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is \&quot;user,system\&quot; | [optional] 
**properties** | **object** | Represents properties of AvailableProviderOperation | [optional] 

## Example

```python
from openapi_client.models.available_provider_operation import AvailableProviderOperation

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProviderOperation from a JSON string
available_provider_operation_instance = AvailableProviderOperation.from_json(json)
# print the JSON string representation of the object
print(AvailableProviderOperation.to_json())

# convert the object into a dict
available_provider_operation_dict = available_provider_operation_instance.to_dict()
# create an instance of AvailableProviderOperation from a dict
available_provider_operation_from_dict = AvailableProviderOperation.from_dict(available_provider_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


