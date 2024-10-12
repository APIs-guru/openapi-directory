# Activity

Represents a weekly bucket of instance activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logins** | **str** | User logins since the week began, String (cast from an integer). | [optional] 
**registrations** | **str** | User registrations since the week began, String (cast from an integer). | [optional] 
**statuses** | **str** | Statuses created since the week began, String (cast from an integer). | [optional] 
**week** | **str** | Midnight at the first day of the week.  (UNIX Timestamp). | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


