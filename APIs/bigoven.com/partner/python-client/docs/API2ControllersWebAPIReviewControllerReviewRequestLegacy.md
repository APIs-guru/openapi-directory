# API2ControllersWebAPIReviewControllerReviewRequestLegacy

Legacy -- This object here is deprecated. Please use the new \"ReviewRequest\" structure for all future development

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_minutes** | **int** |  | [optional] 
**comment** | **str** |  | [optional] 
**guid** | **str** |  | [optional] 
**make_again** | **str** |  | [optional] 
**parent_id** | **int** |  | [optional] 
**star_rating** | **int** |  | [optional] 
**total_minutes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_review_controller_review_request_legacy import API2ControllersWebAPIReviewControllerReviewRequestLegacy

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIReviewControllerReviewRequestLegacy from a JSON string
api2_controllers_web_api_review_controller_review_request_legacy_instance = API2ControllersWebAPIReviewControllerReviewRequestLegacy.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIReviewControllerReviewRequestLegacy.to_json())

# convert the object into a dict
api2_controllers_web_api_review_controller_review_request_legacy_dict = api2_controllers_web_api_review_controller_review_request_legacy_instance.to_dict()
# create an instance of API2ControllersWebAPIReviewControllerReviewRequestLegacy from a dict
api2_controllers_web_api_review_controller_review_request_legacy_from_dict = API2ControllersWebAPIReviewControllerReviewRequestLegacy.from_dict(api2_controllers_web_api_review_controller_review_request_legacy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


