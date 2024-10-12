# HostingConfiguration

Describes the hosting configuration of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Additional hosting configuration type qualifier. | 
**provider** | **str** | The hosting provider of the VM. | [optional] 

## Example

```python
from openapi_client.models.hosting_configuration import HostingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HostingConfiguration from a JSON string
hosting_configuration_instance = HostingConfiguration.from_json(json)
# print the JSON string representation of the object
print(HostingConfiguration.to_json())

# convert the object into a dict
hosting_configuration_dict = hosting_configuration_instance.to_dict()
# create an instance of HostingConfiguration from a dict
hosting_configuration_from_dict = HostingConfiguration.from_dict(hosting_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


