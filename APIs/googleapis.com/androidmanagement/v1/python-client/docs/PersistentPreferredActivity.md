# PersistentPreferredActivity

A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The intent actions to match in the filter. If any actions are included in the filter, then an intent&#39;s action must be one of those values for it to match. If no actions are included, the intent action is ignored. | [optional] 
**categories** | **List[str]** | The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent. | [optional] 
**receiver_activity** | **str** | The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. | [optional] 

## Example

```python
from openapi_client.models.persistent_preferred_activity import PersistentPreferredActivity

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentPreferredActivity from a JSON string
persistent_preferred_activity_instance = PersistentPreferredActivity.from_json(json)
# print the JSON string representation of the object
print(PersistentPreferredActivity.to_json())

# convert the object into a dict
persistent_preferred_activity_dict = persistent_preferred_activity_instance.to_dict()
# create an instance of PersistentPreferredActivity from a dict
persistent_preferred_activity_from_dict = PersistentPreferredActivity.from_dict(persistent_preferred_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


