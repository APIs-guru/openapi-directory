# ActivityObjectPlusoners

People who +1'd this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_link** | **str** | The URL for the collection of people who +1&#39;d this activity. | [optional] 
**total_items** | **int** | Total number of people who +1&#39;d this activity. | [optional] 

## Example

```python
from openapi_client.models.activity_object_plusoners import ActivityObjectPlusoners

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectPlusoners from a JSON string
activity_object_plusoners_instance = ActivityObjectPlusoners.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectPlusoners.to_json())

# convert the object into a dict
activity_object_plusoners_dict = activity_object_plusoners_instance.to_dict()
# create an instance of ActivityObjectPlusoners from a dict
activity_object_plusoners_from_dict = ActivityObjectPlusoners.from_dict(activity_object_plusoners_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


