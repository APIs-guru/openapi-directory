# SetLocationsRequest

SetLocationsRequest sets the locations of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**locations** | **List[str]** | Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster&#39;s nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster&#39;s primary zone. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to set locations. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_locations_request import SetLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetLocationsRequest from a JSON string
set_locations_request_instance = SetLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(SetLocationsRequest.to_json())

# convert the object into a dict
set_locations_request_dict = set_locations_request_instance.to_dict()
# create an instance of SetLocationsRequest from a dict
set_locations_request_from_dict = SetLocationsRequest.from_dict(set_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


