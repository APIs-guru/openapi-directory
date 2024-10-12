# CloudRunLocation

Information specifying where to deploy a Cloud Run Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Required. The location for the Cloud Run Service. Format must be &#x60;projects/{project}/locations/{location}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cloud_run_location import CloudRunLocation

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunLocation from a JSON string
cloud_run_location_instance = CloudRunLocation.from_json(json)
# print the JSON string representation of the object
print(CloudRunLocation.to_json())

# convert the object into a dict
cloud_run_location_dict = cloud_run_location_instance.to_dict()
# create an instance of CloudRunLocation from a dict
cloud_run_location_from_dict = CloudRunLocation.from_dict(cloud_run_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


