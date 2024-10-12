# ManagedZone

represents the Connector's Managed Zone resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**description** | **str** | Optional. Description of the resource. | [optional] 
**dns** | **str** | Required. DNS Name of the resource | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**name** | **str** | Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} | [optional] [readonly] 
**target_project** | **str** | Required. The name of the Target Project | [optional] 
**target_vpc** | **str** | Required. The name of the Target Project VPC Network | [optional] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_zone import ManagedZone

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZone from a JSON string
managed_zone_instance = ManagedZone.from_json(json)
# print the JSON string representation of the object
print(ManagedZone.to_json())

# convert the object into a dict
managed_zone_dict = managed_zone_instance.to_dict()
# create an instance of ManagedZone from a dict
managed_zone_from_dict = ManagedZone.from_dict(managed_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


