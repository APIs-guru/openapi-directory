# GoogleCloudMlV1ListStudiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**studies** | [**List[GoogleCloudMlV1Study]**](GoogleCloudMlV1Study.md) | The studies associated with the project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_studies_response import GoogleCloudMlV1ListStudiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListStudiesResponse from a JSON string
google_cloud_ml_v1_list_studies_response_instance = GoogleCloudMlV1ListStudiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListStudiesResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_studies_response_dict = google_cloud_ml_v1_list_studies_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListStudiesResponse from a dict
google_cloud_ml_v1_list_studies_response_from_dict = GoogleCloudMlV1ListStudiesResponse.from_dict(google_cloud_ml_v1_list_studies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


