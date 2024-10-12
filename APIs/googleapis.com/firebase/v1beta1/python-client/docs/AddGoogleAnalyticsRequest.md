# AddGoogleAnalyticsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_account_id** | **str** | The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the &#x60;FirebaseProject&#x60;. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the &#x60;FirebaseProject&#x60;. | [optional] 
**analytics_property_id** | **str** | The ID for the existing Google Analytics property that you want to associate with the &#x60;FirebaseProject&#x60;. | [optional] 

## Example

```python
from openapi_client.models.add_google_analytics_request import AddGoogleAnalyticsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddGoogleAnalyticsRequest from a JSON string
add_google_analytics_request_instance = AddGoogleAnalyticsRequest.from_json(json)
# print the JSON string representation of the object
print(AddGoogleAnalyticsRequest.to_json())

# convert the object into a dict
add_google_analytics_request_dict = add_google_analytics_request_instance.to_dict()
# create an instance of AddGoogleAnalyticsRequest from a dict
add_google_analytics_request_from_dict = AddGoogleAnalyticsRequest.from_dict(add_google_analytics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


