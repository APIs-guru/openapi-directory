# APISchoolReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left by reviewer (html encoded) | [optional] 
**number_of_stars** | **int** | Number of stars - 1 (poor) to 5 (excellent) | [optional] 
**submit_date** | **str** | The date the review was submitted (mm/dd/yyyy) | [optional] 
**submitted_by** | **str** | Reviewer type (parent, student, teacher, principal, citizen) | [optional] 

## Example

```python
from openapi_client.models.api_school_review import APISchoolReview

# TODO update the JSON string below
json = "{}"
# create an instance of APISchoolReview from a JSON string
api_school_review_instance = APISchoolReview.from_json(json)
# print the JSON string representation of the object
print(APISchoolReview.to_json())

# convert the object into a dict
api_school_review_dict = api_school_review_instance.to_dict()
# create an instance of APISchoolReview from a dict
api_school_review_from_dict = APISchoolReview.from_dict(api_school_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


