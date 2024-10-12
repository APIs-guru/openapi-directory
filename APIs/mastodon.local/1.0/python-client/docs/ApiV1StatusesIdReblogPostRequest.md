# ApiV1StatusesIdReblogPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visibility** | **str** | any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI. | [optional] 

## Example

```python
from openapi_client.models.api_v1_statuses_id_reblog_post_request import ApiV1StatusesIdReblogPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1StatusesIdReblogPostRequest from a JSON string
api_v1_statuses_id_reblog_post_request_instance = ApiV1StatusesIdReblogPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1StatusesIdReblogPostRequest.to_json())

# convert the object into a dict
api_v1_statuses_id_reblog_post_request_dict = api_v1_statuses_id_reblog_post_request_instance.to_dict()
# create an instance of ApiV1StatusesIdReblogPostRequest from a dict
api_v1_statuses_id_reblog_post_request_from_dict = ApiV1StatusesIdReblogPostRequest.from_dict(api_v1_statuses_id_reblog_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


