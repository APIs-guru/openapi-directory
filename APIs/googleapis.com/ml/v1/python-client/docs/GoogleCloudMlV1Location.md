# GoogleCloudMlV1Location


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[GoogleCloudMlV1Capability]**](GoogleCloudMlV1Capability.md) | Capabilities available in the location. | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_location import GoogleCloudMlV1Location

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Location from a JSON string
google_cloud_ml_v1_location_instance = GoogleCloudMlV1Location.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Location.to_json())

# convert the object into a dict
google_cloud_ml_v1_location_dict = google_cloud_ml_v1_location_instance.to_dict()
# create an instance of GoogleCloudMlV1Location from a dict
google_cloud_ml_v1_location_from_dict = GoogleCloudMlV1Location.from_dict(google_cloud_ml_v1_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


