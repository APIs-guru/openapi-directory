# SetLoggingServiceRequest

SetLoggingServiceRequest sets the logging service of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**logging_service** | **str** | Required. The logging service the cluster should use to write logs. Currently available options: * &#x60;logging.googleapis.com/kubernetes&#x60; - The Cloud Logging service with a Kubernetes-native resource model * &#x60;logging.googleapis.com&#x60; - The legacy Cloud Logging service (no longer available as of GKE 1.15). * &#x60;none&#x60; - no logs will be exported from the cluster. If left as an empty string,&#x60;logging.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;logging.googleapis.com&#x60; for earlier versions. | [optional] 
**name** | **str** | The name (project, location, cluster) of the cluster to set logging. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_logging_service_request import SetLoggingServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetLoggingServiceRequest from a JSON string
set_logging_service_request_instance = SetLoggingServiceRequest.from_json(json)
# print the JSON string representation of the object
print(SetLoggingServiceRequest.to_json())

# convert the object into a dict
set_logging_service_request_dict = set_logging_service_request_instance.to_dict()
# create an instance of SetLoggingServiceRequest from a dict
set_logging_service_request_from_dict = SetLoggingServiceRequest.from_dict(set_logging_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


