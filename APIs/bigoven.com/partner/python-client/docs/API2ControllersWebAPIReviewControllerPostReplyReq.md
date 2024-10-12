# API2ControllersWebAPIReviewControllerPostReplyReq

Reply request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_review_controller_post_reply_req import API2ControllersWebAPIReviewControllerPostReplyReq

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIReviewControllerPostReplyReq from a JSON string
api2_controllers_web_api_review_controller_post_reply_req_instance = API2ControllersWebAPIReviewControllerPostReplyReq.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIReviewControllerPostReplyReq.to_json())

# convert the object into a dict
api2_controllers_web_api_review_controller_post_reply_req_dict = api2_controllers_web_api_review_controller_post_reply_req_instance.to_dict()
# create an instance of API2ControllersWebAPIReviewControllerPostReplyReq from a dict
api2_controllers_web_api_review_controller_post_reply_req_from_dict = API2ControllersWebAPIReviewControllerPostReplyReq.from_dict(api2_controllers_web_api_review_controller_post_reply_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


