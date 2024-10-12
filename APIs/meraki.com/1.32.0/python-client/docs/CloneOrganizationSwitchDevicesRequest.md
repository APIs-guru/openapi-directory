# CloneOrganizationSwitchDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_serial** | **str** | Serial number of the source switch (must be on a network not bound to a template) | 
**target_serials** | **List[str]** | Array of serial numbers of one or more target switches (must be on a network not bound to a template) | 

## Example

```python
from openapi_client.models.clone_organization_switch_devices_request import CloneOrganizationSwitchDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneOrganizationSwitchDevicesRequest from a JSON string
clone_organization_switch_devices_request_instance = CloneOrganizationSwitchDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(CloneOrganizationSwitchDevicesRequest.to_json())

# convert the object into a dict
clone_organization_switch_devices_request_dict = clone_organization_switch_devices_request_instance.to_dict()
# create an instance of CloneOrganizationSwitchDevicesRequest from a dict
clone_organization_switch_devices_request_from_dict = CloneOrganizationSwitchDevicesRequest.from_dict(clone_organization_switch_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


