# GoogleCloudRetailV2alphaEnrollSolutionRequest

Request for EnrollSolution method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**solution** | **str** | Required. Solution to enroll. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_enroll_solution_request import GoogleCloudRetailV2alphaEnrollSolutionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaEnrollSolutionRequest from a JSON string
google_cloud_retail_v2alpha_enroll_solution_request_instance = GoogleCloudRetailV2alphaEnrollSolutionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaEnrollSolutionRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_enroll_solution_request_dict = google_cloud_retail_v2alpha_enroll_solution_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaEnrollSolutionRequest from a dict
google_cloud_retail_v2alpha_enroll_solution_request_from_dict = GoogleCloudRetailV2alphaEnrollSolutionRequest.from_dict(google_cloud_retail_v2alpha_enroll_solution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


