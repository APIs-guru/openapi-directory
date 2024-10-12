# ManagedConfigurationsForDeviceListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_configuration_for_device** | [**List[ManagedConfiguration]**](ManagedConfiguration.md) | A managed configuration for an app on a specific device. | [optional] 

## Example

```python
from openapi_client.models.managed_configurations_for_device_list_response import ManagedConfigurationsForDeviceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfigurationsForDeviceListResponse from a JSON string
managed_configurations_for_device_list_response_instance = ManagedConfigurationsForDeviceListResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedConfigurationsForDeviceListResponse.to_json())

# convert the object into a dict
managed_configurations_for_device_list_response_dict = managed_configurations_for_device_list_response_instance.to_dict()
# create an instance of ManagedConfigurationsForDeviceListResponse from a dict
managed_configurations_for_device_list_response_from_dict = ManagedConfigurationsForDeviceListResponse.from_dict(managed_configurations_for_device_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


