# StartActivityNotFound

User provided intent failed to resolve to an activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.start_activity_not_found import StartActivityNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of StartActivityNotFound from a JSON string
start_activity_not_found_instance = StartActivityNotFound.from_json(json)
# print the JSON string representation of the object
print(StartActivityNotFound.to_json())

# convert the object into a dict
start_activity_not_found_dict = start_activity_not_found_instance.to_dict()
# create an instance of StartActivityNotFound from a dict
start_activity_not_found_from_dict = StartActivityNotFound.from_dict(start_activity_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


