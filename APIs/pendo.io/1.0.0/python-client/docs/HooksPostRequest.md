# HooksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **str** | The event field can contain one of the following values- 1) &#39;feature_created&#39; - When a new feature is created a webhook will be triggered with the details of the feature. Feature details can be found in the model section under Feature object 2) &#39;feature_status_changed&#39; - When a feature status is updated a webhook will be triggered with the updated Feature details. Feature details can be found in the model section under Feature object. 3) &#39;feature_comment_created&#39; - When a commment is created on a feature, a webhook will be triggered with the details about the Feature and the new comment. Feature and Comment details can be found in the model section under Feature object and Comment object. | [optional] 
**target_url** | **str** | The target URL where the events will be sent to. | [optional] 

## Example

```python
from openapi_client.models.hooks_post_request import HooksPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HooksPostRequest from a JSON string
hooks_post_request_instance = HooksPostRequest.from_json(json)
# print the JSON string representation of the object
print(HooksPostRequest.to_json())

# convert the object into a dict
hooks_post_request_dict = hooks_post_request_instance.to_dict()
# create an instance of HooksPostRequest from a dict
hooks_post_request_from_dict = HooksPostRequest.from_dict(hooks_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


