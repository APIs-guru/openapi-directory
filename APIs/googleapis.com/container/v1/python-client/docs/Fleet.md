# Fleet

Fleet is the fleet configuration for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | **str** | [Output only] The full resource name of the registered fleet membership of the cluster, in the format &#x60;//gkehub.googleapis.com/projects/*/locations/*/memberships/*&#x60;. | [optional] 
**pre_registered** | **bool** | [Output only] Whether the cluster has been registered through the fleet API. | [optional] 
**project** | **str** | The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered. | [optional] 

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


