# CloudRunService

Represents a Cloud Run service destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: \&quot;/route\&quot;, \&quot;route\&quot;, \&quot;route/subroute\&quot;. | [optional] 
**region** | **str** | Required. The region the Cloud Run service is deployed in. | [optional] 
**service** | **str** | Required. The name of the Cloud run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed. | [optional] 

## Example

```python
from openapi_client.models.cloud_run_service import CloudRunService

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunService from a JSON string
cloud_run_service_instance = CloudRunService.from_json(json)
# print the JSON string representation of the object
print(CloudRunService.to_json())

# convert the object into a dict
cloud_run_service_dict = cloud_run_service_instance.to_dict()
# create an instance of CloudRunService from a dict
cloud_run_service_from_dict = CloudRunService.from_dict(cloud_run_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


