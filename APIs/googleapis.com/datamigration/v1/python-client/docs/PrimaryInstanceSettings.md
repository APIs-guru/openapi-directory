# PrimaryInstanceSettings

Settings for the cluster's primary instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_flags** | **Dict[str, str]** | Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used. | [optional] 
**id** | **str** | Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression \&quot;[a-z0-9-]+\&quot;. | [optional] 
**labels** | **Dict[str, str]** | Labels for the AlloyDB primary instance created by DMS. An object containing a list of &#39;key&#39;, &#39;value&#39; pairs. | [optional] 
**machine_config** | [**MachineConfig**](MachineConfig.md) |  | [optional] 
**private_ip** | **str** | Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application. | [optional] [readonly] 

## Example

```python
from openapi_client.models.primary_instance_settings import PrimaryInstanceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryInstanceSettings from a JSON string
primary_instance_settings_instance = PrimaryInstanceSettings.from_json(json)
# print the JSON string representation of the object
print(PrimaryInstanceSettings.to_json())

# convert the object into a dict
primary_instance_settings_dict = primary_instance_settings_instance.to_dict()
# create an instance of PrimaryInstanceSettings from a dict
primary_instance_settings_from_dict = PrimaryInstanceSettings.from_dict(primary_instance_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


