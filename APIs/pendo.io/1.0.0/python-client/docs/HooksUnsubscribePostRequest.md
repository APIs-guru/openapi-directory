# HooksUnsubscribePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.hooks_unsubscribe_post_request import HooksUnsubscribePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HooksUnsubscribePostRequest from a JSON string
hooks_unsubscribe_post_request_instance = HooksUnsubscribePostRequest.from_json(json)
# print the JSON string representation of the object
print(HooksUnsubscribePostRequest.to_json())

# convert the object into a dict
hooks_unsubscribe_post_request_dict = hooks_unsubscribe_post_request_instance.to_dict()
# create an instance of HooksUnsubscribePostRequest from a dict
hooks_unsubscribe_post_request_from_dict = HooksUnsubscribePostRequest.from_dict(hooks_unsubscribe_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


