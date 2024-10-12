# IntentFilter

The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_names** | **List[str]** | The android:name value of the tag. | [optional] 
**category_names** | **List[str]** | The android:name value of the tag. | [optional] 
**mime_type** | **str** | The android:mimeType value of the tag. | [optional] 

## Example

```python
from openapi_client.models.intent_filter import IntentFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntentFilter from a JSON string
intent_filter_instance = IntentFilter.from_json(json)
# print the JSON string representation of the object
print(IntentFilter.to_json())

# convert the object into a dict
intent_filter_dict = intent_filter_instance.to_dict()
# create an instance of IntentFilter from a dict
intent_filter_from_dict = IntentFilter.from_dict(intent_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


