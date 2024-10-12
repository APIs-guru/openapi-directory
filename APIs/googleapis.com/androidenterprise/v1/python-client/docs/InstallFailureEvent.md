# InstallFailureEvent

An event generated when an app installation failed on a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The Android ID of the device. This field will always be present. | [optional] 
**failure_details** | **str** | Additional details on the failure if applicable. | [optional] 
**failure_reason** | **str** | The reason for the installation failure. This field will always be present. | [optional] 
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) for which the install failure event occured. This field will always be present. | [optional] 
**user_id** | **str** | The ID of the user. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.install_failure_event import InstallFailureEvent

# TODO update the JSON string below
json = "{}"
# create an instance of InstallFailureEvent from a JSON string
install_failure_event_instance = InstallFailureEvent.from_json(json)
# print the JSON string representation of the object
print(InstallFailureEvent.to_json())

# convert the object into a dict
install_failure_event_dict = install_failure_event_instance.to_dict()
# create an instance of InstallFailureEvent from a dict
install_failure_event_from_dict = InstallFailureEvent.from_dict(install_failure_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


