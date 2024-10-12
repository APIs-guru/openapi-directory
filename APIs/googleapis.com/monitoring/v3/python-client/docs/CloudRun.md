# CloudRun

Cloud Run service. Learn more at https://cloud.google.com/run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location the service is run. Corresponds to the location resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). | [optional] 
**service_name** | **str** | The name of the Cloud Run service. Corresponds to the service_name resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). | [optional] 

## Example

```python
from openapi_client.models.cloud_run import CloudRun

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRun from a JSON string
cloud_run_instance = CloudRun.from_json(json)
# print the JSON string representation of the object
print(CloudRun.to_json())

# convert the object into a dict
cloud_run_dict = cloud_run_instance.to_dict()
# create an instance of CloudRun from a dict
cloud_run_from_dict = CloudRun.from_dict(cloud_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


