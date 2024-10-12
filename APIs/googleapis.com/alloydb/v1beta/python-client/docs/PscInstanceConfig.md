# PscInstanceConfig

PscInstanceConfig contains PSC related configuration at an instance level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_consumer_networks** | **List[str]** | Optional. List of consumer networks that are allowed to create PSC endpoints to service-attachments to this instance. | [optional] 
**allowed_consumer_projects** | **List[str]** | Optional. List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. | [optional] 
**outgoing_service_attachment_links** | **List[str]** | Optional. List of service attachments that this instance has created endpoints to connect with. Currently, only a single outgoing service attachment is supported per instance. | [optional] 
**psc_enabled** | **bool** | Optional. Whether PSC connectivity is enabled for this instance. This is populated by referencing the value from the parent cluster. | [optional] 
**psc_interface_configs** | [**List[PscInterfaceConfig]**](PscInterfaceConfig.md) | Optional. Configurations for setting up PSC interfaces attached to the instance which are used for outbound connectivity. Only primary instances can have PSC interface attached. All the VMs created for the primary instance will share the same configurations. Currently we only support 0 or 1 PSC interface. | [optional] 
**service_attachment_link** | **str** | Output only. The service attachment created when Private Service Connect (PSC) is enabled for the instance. The name of the resource will be in the format of &#x60;projects//regions//serviceAttachments/&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.psc_instance_config import PscInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PscInstanceConfig from a JSON string
psc_instance_config_instance = PscInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(PscInstanceConfig.to_json())

# convert the object into a dict
psc_instance_config_dict = psc_instance_config_instance.to_dict()
# create an instance of PscInstanceConfig from a dict
psc_instance_config_from_dict = PscInstanceConfig.from_dict(psc_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


