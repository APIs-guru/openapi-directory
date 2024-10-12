# GoogleCloudLocationLocation

A resource that represents a Google Cloud location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name for this location, typically a nearby city name. For example, \&quot;Tokyo\&quot;. | [optional] 
**labels** | **Dict[str, str]** | Cross-service attributes for the location. For example {\&quot;cloud.googleapis.com/region\&quot;: \&quot;us-east1\&quot;} | [optional] 
**location_id** | **str** | The canonical id for this location. For example: &#x60;\&quot;us-east1\&quot;&#x60;. | [optional] 
**metadata** | **Dict[str, object]** | Service-specific metadata. For example the available capacity at the given location. | [optional] 
**name** | **str** | Resource name for the location, which may vary between implementations. For example: &#x60;\&quot;projects/example-project/locations/us-east1\&quot;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_location_location import GoogleCloudLocationLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudLocationLocation from a JSON string
google_cloud_location_location_instance = GoogleCloudLocationLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudLocationLocation.to_json())

# convert the object into a dict
google_cloud_location_location_dict = google_cloud_location_location_instance.to_dict()
# create an instance of GoogleCloudLocationLocation from a dict
google_cloud_location_location_from_dict = GoogleCloudLocationLocation.from_dict(google_cloud_location_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


