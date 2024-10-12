# AnalyticsProperty

Details of a Google Analytics property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_account_id** | **str** | Output only. The ID of the [Google Analytics account](https://www.google.com/analytics/) for the Google Analytics property associated with the specified FirebaseProject. | [optional] [readonly] 
**display_name** | **str** | The display name of the Google Analytics property associated with the specified &#x60;FirebaseProject&#x60;. | [optional] 
**id** | **str** | The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified &#x60;FirebaseProject&#x60;. If you called [&#x60;AddGoogleAnalytics&#x60;](../../v1beta1/projects/addGoogleAnalytics) to link the &#x60;FirebaseProject&#x60; with a Google Analytics account, the value in this &#x60;id&#x60; field is the same as the ID of the property either specified or provisioned with that call to &#x60;AddGoogleAnalytics&#x60;. | [optional] 

## Example

```python
from openapi_client.models.analytics_property import AnalyticsProperty

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsProperty from a JSON string
analytics_property_instance = AnalyticsProperty.from_json(json)
# print the JSON string representation of the object
print(AnalyticsProperty.to_json())

# convert the object into a dict
analytics_property_dict = analytics_property_instance.to_dict()
# create an instance of AnalyticsProperty from a dict
analytics_property_from_dict = AnalyticsProperty.from_dict(analytics_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


