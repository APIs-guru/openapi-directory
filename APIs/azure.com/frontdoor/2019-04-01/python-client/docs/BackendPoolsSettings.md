# BackendPoolsSettings

Settings that apply to all backend pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce_certificate_name_check** | **str** | Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.backend_pools_settings import BackendPoolsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPoolsSettings from a JSON string
backend_pools_settings_instance = BackendPoolsSettings.from_json(json)
# print the JSON string representation of the object
print(BackendPoolsSettings.to_json())

# convert the object into a dict
backend_pools_settings_dict = backend_pools_settings_instance.to_dict()
# create an instance of BackendPoolsSettings from a dict
backend_pools_settings_from_dict = BackendPoolsSettings.from_dict(backend_pools_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


