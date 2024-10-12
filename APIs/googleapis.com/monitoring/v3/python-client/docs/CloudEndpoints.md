# CloudEndpoints

Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | The name of the Cloud Endpoints service underlying this service. Corresponds to the service resource label in the api monitored resource (https://cloud.google.com/monitoring/api/resources#tag_api). | [optional] 

## Example

```python
from openapi_client.models.cloud_endpoints import CloudEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpoints from a JSON string
cloud_endpoints_instance = CloudEndpoints.from_json(json)
# print the JSON string representation of the object
print(CloudEndpoints.to_json())

# convert the object into a dict
cloud_endpoints_dict = cloud_endpoints_instance.to_dict()
# create an instance of CloudEndpoints from a dict
cloud_endpoints_from_dict = CloudEndpoints.from_dict(cloud_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


