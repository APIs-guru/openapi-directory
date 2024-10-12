# GoogleCloudDiscoveryengineV1betaInterval

A floating point interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusive_maximum** | **float** | Exclusive upper bound. | [optional] 
**exclusive_minimum** | **float** | Exclusive lower bound. | [optional] 
**maximum** | **float** | Inclusive upper bound. | [optional] 
**minimum** | **float** | Inclusive lower bound. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_interval import GoogleCloudDiscoveryengineV1betaInterval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaInterval from a JSON string
google_cloud_discoveryengine_v1beta_interval_instance = GoogleCloudDiscoveryengineV1betaInterval.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaInterval.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_interval_dict = google_cloud_discoveryengine_v1beta_interval_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaInterval from a dict
google_cloud_discoveryengine_v1beta_interval_from_dict = GoogleCloudDiscoveryengineV1betaInterval.from_dict(google_cloud_discoveryengine_v1beta_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


