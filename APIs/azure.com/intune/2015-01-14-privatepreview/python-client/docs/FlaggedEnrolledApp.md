# FlaggedEnrolledApp

Flagged Enrolled App for the given tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FlaggedEnrolledAppProperties**](FlaggedEnrolledAppProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.flagged_enrolled_app import FlaggedEnrolledApp

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedEnrolledApp from a JSON string
flagged_enrolled_app_instance = FlaggedEnrolledApp.from_json(json)
# print the JSON string representation of the object
print(FlaggedEnrolledApp.to_json())

# convert the object into a dict
flagged_enrolled_app_dict = flagged_enrolled_app_instance.to_dict()
# create an instance of FlaggedEnrolledApp from a dict
flagged_enrolled_app_from_dict = FlaggedEnrolledApp.from_dict(flagged_enrolled_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


