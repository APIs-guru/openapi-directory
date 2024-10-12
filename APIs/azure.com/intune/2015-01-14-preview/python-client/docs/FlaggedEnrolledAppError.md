# FlaggedEnrolledAppError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** |  | [optional] [readonly] 
**severity** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.flagged_enrolled_app_error import FlaggedEnrolledAppError

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedEnrolledAppError from a JSON string
flagged_enrolled_app_error_instance = FlaggedEnrolledAppError.from_json(json)
# print the JSON string representation of the object
print(FlaggedEnrolledAppError.to_json())

# convert the object into a dict
flagged_enrolled_app_error_dict = flagged_enrolled_app_error_instance.to_dict()
# create an instance of FlaggedEnrolledAppError from a dict
flagged_enrolled_app_error_from_dict = FlaggedEnrolledAppError.from_dict(flagged_enrolled_app_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


