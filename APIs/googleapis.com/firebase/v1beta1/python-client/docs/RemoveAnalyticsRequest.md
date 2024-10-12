# RemoveAnalyticsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_property_id** | **str** | Optional. The ID of the Google Analytics property associated with the specified &#x60;FirebaseProject&#x60;. - If not set, then the Google Analytics property that is currently associated with the specified &#x60;FirebaseProject&#x60; is removed. - If set, and the specified &#x60;FirebaseProject&#x60; is currently associated with a *different* Google Analytics property, then the response is a &#x60;412 Precondition Failed&#x60; error.  | [optional] 

## Example

```python
from openapi_client.models.remove_analytics_request import RemoveAnalyticsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAnalyticsRequest from a JSON string
remove_analytics_request_instance = RemoveAnalyticsRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveAnalyticsRequest.to_json())

# convert the object into a dict
remove_analytics_request_dict = remove_analytics_request_instance.to_dict()
# create an instance of RemoveAnalyticsRequest from a dict
remove_analytics_request_from_dict = RemoveAnalyticsRequest.from_dict(remove_analytics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


