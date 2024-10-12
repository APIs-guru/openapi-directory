# ActivityObjectResharers

People who reshared this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_link** | **str** | The URL for the collection of resharers. | [optional] 
**total_items** | **int** | Total number of people who reshared this activity. | [optional] 

## Example

```python
from openapi_client.models.activity_object_resharers import ActivityObjectResharers

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectResharers from a JSON string
activity_object_resharers_instance = ActivityObjectResharers.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectResharers.to_json())

# convert the object into a dict
activity_object_resharers_dict = activity_object_resharers_instance.to_dict()
# create an instance of ActivityObjectResharers from a dict
activity_object_resharers_from_dict = ActivityObjectResharers.from_dict(activity_object_resharers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


