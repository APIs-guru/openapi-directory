# ReviewsCreateJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_value** | **str** | Content to evaluate for a job. | 

## Example

```python
from openapi_client.models.reviews_create_job_request import ReviewsCreateJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsCreateJobRequest from a JSON string
reviews_create_job_request_instance = ReviewsCreateJobRequest.from_json(json)
# print the JSON string representation of the object
print(ReviewsCreateJobRequest.to_json())

# convert the object into a dict
reviews_create_job_request_dict = reviews_create_job_request_instance.to_dict()
# create an instance of ReviewsCreateJobRequest from a dict
reviews_create_job_request_from_dict = ReviewsCreateJobRequest.from_dict(reviews_create_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


