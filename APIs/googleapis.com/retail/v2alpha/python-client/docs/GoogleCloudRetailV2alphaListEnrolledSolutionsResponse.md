# GoogleCloudRetailV2alphaListEnrolledSolutionsResponse

Response for ListEnrolledSolutions method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrolled_solutions** | **List[str]** | Retail API solutions that the project has enrolled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_list_enrolled_solutions_response import GoogleCloudRetailV2alphaListEnrolledSolutionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaListEnrolledSolutionsResponse from a JSON string
google_cloud_retail_v2alpha_list_enrolled_solutions_response_instance = GoogleCloudRetailV2alphaListEnrolledSolutionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaListEnrolledSolutionsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_list_enrolled_solutions_response_dict = google_cloud_retail_v2alpha_list_enrolled_solutions_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaListEnrolledSolutionsResponse from a dict
google_cloud_retail_v2alpha_list_enrolled_solutions_response_from_dict = GoogleCloudRetailV2alphaListEnrolledSolutionsResponse.from_dict(google_cloud_retail_v2alpha_list_enrolled_solutions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


