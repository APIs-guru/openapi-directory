# GoogleCloudMlV1ListLocationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[GoogleCloudMlV1Location]**](GoogleCloudMlV1Location.md) | Locations where at least one type of CMLE capability is available. | [optional] 
**next_page_token** | **str** | Optional. Pass this token as the &#x60;page_token&#x60; field of the request for a subsequent call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_locations_response import GoogleCloudMlV1ListLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListLocationsResponse from a JSON string
google_cloud_ml_v1_list_locations_response_instance = GoogleCloudMlV1ListLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListLocationsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_locations_response_dict = google_cloud_ml_v1_list_locations_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListLocationsResponse from a dict
google_cloud_ml_v1_list_locations_response_from_dict = GoogleCloudMlV1ListLocationsResponse.from_dict(google_cloud_ml_v1_list_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


