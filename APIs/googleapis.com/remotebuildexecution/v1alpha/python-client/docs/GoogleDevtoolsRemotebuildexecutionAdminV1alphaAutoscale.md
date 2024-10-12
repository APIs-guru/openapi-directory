# GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale

Autoscale defines the autoscaling policy of a worker pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_size** | **str** | Optional. The maximal number of workers. Must be equal to or greater than min_size. | [optional] 
**min_idle_workers** | **str** | Optional. The minimum number of idle workers the autoscaler will aim to have in the pool at all times that are immediately available to accept a surge in build traffic. The pool size will still be constrained by min_size and max_size. | [optional] 
**min_size** | **str** | Optional. The minimal number of workers. Must be greater than 0. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_autoscale import GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_autoscale_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_autoscale_dict = google_devtools_remotebuildexecution_admin_v1alpha_autoscale_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale from a dict
google_devtools_remotebuildexecution_admin_v1alpha_autoscale_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_autoscale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


