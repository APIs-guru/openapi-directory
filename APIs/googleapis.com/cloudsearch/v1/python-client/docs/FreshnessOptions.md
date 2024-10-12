# FreshnessOptions

Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freshness_duration** | **str** | The duration after which an object should be considered stale. The default value is 180 days (in seconds). | [optional] 
**freshness_property** | **str** | This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time. | [optional] 

## Example

```python
from openapi_client.models.freshness_options import FreshnessOptions

# TODO update the JSON string below
json = "{}"
# create an instance of FreshnessOptions from a JSON string
freshness_options_instance = FreshnessOptions.from_json(json)
# print the JSON string representation of the object
print(FreshnessOptions.to_json())

# convert the object into a dict
freshness_options_dict = freshness_options_instance.to_dict()
# create an instance of FreshnessOptions from a dict
freshness_options_from_dict = FreshnessOptions.from_dict(freshness_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


