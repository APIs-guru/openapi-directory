# ReviewComponents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_review** | **str** | review of car given by current user | [optional] 
**user_name** | **str** | Name of user who has given review | [optional] 
**user_rating** | **float** | rating for dealer given by user ranging from 1-5 | [optional] 

## Example

```python
from openapi_client.models.review_components import ReviewComponents

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewComponents from a JSON string
review_components_instance = ReviewComponents.from_json(json)
# print the JSON string representation of the object
print(ReviewComponents.to_json())

# convert the object into a dict
review_components_dict = review_components_instance.to_dict()
# create an instance of ReviewComponents from a dict
review_components_from_dict = ReviewComponents.from_dict(review_components_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


