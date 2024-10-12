# API2ControllersWebAPIReviewControllerReviewRequest

Payload for reviews

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_minutes** | **int** | How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it               demand of the cook? Optional. | [optional] 
**comment** | **str** | The notes | [optional] 
**make_again** | **str** | \&quot;yes\&quot; or \&quot;no\&quot; | [optional] 
**star_rating** | **int** | 1, 2, 3, 4, or 5 | [optional] 
**total_minutes** | **int** | How long, start to finish, in minutes (integer) did it take? Optional. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_review_controller_review_request import API2ControllersWebAPIReviewControllerReviewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIReviewControllerReviewRequest from a JSON string
api2_controllers_web_api_review_controller_review_request_instance = API2ControllersWebAPIReviewControllerReviewRequest.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIReviewControllerReviewRequest.to_json())

# convert the object into a dict
api2_controllers_web_api_review_controller_review_request_dict = api2_controllers_web_api_review_controller_review_request_instance.to_dict()
# create an instance of API2ControllersWebAPIReviewControllerReviewRequest from a dict
api2_controllers_web_api_review_controller_review_request_from_dict = API2ControllersWebAPIReviewControllerReviewRequest.from_dict(api2_controllers_web_api_review_controller_review_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


