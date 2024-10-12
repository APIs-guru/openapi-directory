# AppUpdateEvent

An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) that was updated. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.app_update_event import AppUpdateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateEvent from a JSON string
app_update_event_instance = AppUpdateEvent.from_json(json)
# print the JSON string representation of the object
print(AppUpdateEvent.to_json())

# convert the object into a dict
app_update_event_dict = app_update_event_instance.to_dict()
# create an instance of AppUpdateEvent from a dict
app_update_event_from_dict = AppUpdateEvent.from_dict(app_update_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


