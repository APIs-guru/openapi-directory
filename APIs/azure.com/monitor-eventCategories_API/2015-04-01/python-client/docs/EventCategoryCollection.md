# EventCategoryCollection

A collection of event categories. Currently possible values are: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LocalizableString]**](LocalizableString.md) | the list that includes the Azure event categories. | 

## Example

```python
from openapi_client.models.event_category_collection import EventCategoryCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EventCategoryCollection from a JSON string
event_category_collection_instance = EventCategoryCollection.from_json(json)
# print the JSON string representation of the object
print(EventCategoryCollection.to_json())

# convert the object into a dict
event_category_collection_dict = event_category_collection_instance.to_dict()
# create an instance of EventCategoryCollection from a dict
event_category_collection_from_dict = EventCategoryCollection.from_dict(event_category_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


