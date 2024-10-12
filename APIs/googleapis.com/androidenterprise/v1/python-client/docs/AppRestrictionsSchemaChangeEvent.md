# AppRestrictionsSchemaChangeEvent

An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) for which the app restriction schema changed. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.app_restrictions_schema_change_event import AppRestrictionsSchemaChangeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AppRestrictionsSchemaChangeEvent from a JSON string
app_restrictions_schema_change_event_instance = AppRestrictionsSchemaChangeEvent.from_json(json)
# print the JSON string representation of the object
print(AppRestrictionsSchemaChangeEvent.to_json())

# convert the object into a dict
app_restrictions_schema_change_event_dict = app_restrictions_schema_change_event_instance.to_dict()
# create an instance of AppRestrictionsSchemaChangeEvent from a dict
app_restrictions_schema_change_event_from_dict = AppRestrictionsSchemaChangeEvent.from_dict(app_restrictions_schema_change_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


