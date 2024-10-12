# Fleet

Fleet contains the Fleet-wide metadata and configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the Fleet was created. | [optional] [readonly] 
**default_cluster_config** | [**DefaultClusterConfig**](DefaultClusterConfig.md) |  | [optional] 
**delete_time** | **str** | Output only. When the Fleet was deleted. | [optional] [readonly] 
**display_name** | **str** | Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: &#x60;Production Fleet&#x60; | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels for this Fleet. | [optional] 
**name** | **str** | Output only. The full, unique resource name of this fleet in the format of &#x60;projects/{project}/locations/{location}/fleets/{fleet}&#x60;. Each Google Cloud project can have at most one fleet resource, named \&quot;default\&quot;. | [optional] [readonly] 
**state** | [**FleetLifecycleState**](FleetLifecycleState.md) |  | [optional] 
**uid** | **str** | Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid. | [optional] [readonly] 
**update_time** | **str** | Output only. When the Fleet was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fleet import Fleet

# TODO update the JSON string below
json = "{}"
# create an instance of Fleet from a JSON string
fleet_instance = Fleet.from_json(json)
# print the JSON string representation of the object
print(Fleet.to_json())

# convert the object into a dict
fleet_dict = fleet_instance.to_dict()
# create an instance of Fleet from a dict
fleet_from_dict = Fleet.from_dict(fleet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


