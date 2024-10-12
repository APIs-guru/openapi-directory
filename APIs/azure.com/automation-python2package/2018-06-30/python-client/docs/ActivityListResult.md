# ActivityListResult

The response model for the list activity operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Activity]**](Activity.md) | Gets or sets a list of activities. | [optional] 

## Example

```python
from openapi_client.models.activity_list_result import ActivityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityListResult from a JSON string
activity_list_result_instance = ActivityListResult.from_json(json)
# print the JSON string representation of the object
print(ActivityListResult.to_json())

# convert the object into a dict
activity_list_result_dict = activity_list_result_instance.to_dict()
# create an instance of ActivityListResult from a dict
activity_list_result_from_dict = ActivityListResult.from_dict(activity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


