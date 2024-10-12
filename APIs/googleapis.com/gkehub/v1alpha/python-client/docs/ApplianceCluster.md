# ApplianceCluster

ApplianceCluster contains information specific to GDC Edge Appliance Clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_link** | **str** | Immutable. Self-link of the Google Cloud resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance | [optional] 

## Example

```python
from openapi_client.models.appliance_cluster import ApplianceCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceCluster from a JSON string
appliance_cluster_instance = ApplianceCluster.from_json(json)
# print the JSON string representation of the object
print(ApplianceCluster.to_json())

# convert the object into a dict
appliance_cluster_dict = appliance_cluster_instance.to_dict()
# create an instance of ApplianceCluster from a dict
appliance_cluster_from_dict = ApplianceCluster.from_dict(appliance_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


