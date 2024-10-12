# CompleteIPRotationRequest

CompleteIPRotationRequest moves the cluster master back into single-IP mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.complete_ip_rotation_request import CompleteIPRotationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteIPRotationRequest from a JSON string
complete_ip_rotation_request_instance = CompleteIPRotationRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteIPRotationRequest.to_json())

# convert the object into a dict
complete_ip_rotation_request_dict = complete_ip_rotation_request_instance.to_dict()
# create an instance of CompleteIPRotationRequest from a dict
complete_ip_rotation_request_from_dict = CompleteIPRotationRequest.from_dict(complete_ip_rotation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


