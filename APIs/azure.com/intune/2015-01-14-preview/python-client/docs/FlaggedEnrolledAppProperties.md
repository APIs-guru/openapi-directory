# FlaggedEnrolledAppProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** |  | [optional] [readonly] 
**errors** | [**List[FlaggedEnrolledAppError]**](FlaggedEnrolledAppError.md) |  | [optional] 
**friendly_name** | **str** |  | [optional] [readonly] 
**last_modified_time** | **str** |  | [optional] [readonly] 
**platform** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.flagged_enrolled_app_properties import FlaggedEnrolledAppProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedEnrolledAppProperties from a JSON string
flagged_enrolled_app_properties_instance = FlaggedEnrolledAppProperties.from_json(json)
# print the JSON string representation of the object
print(FlaggedEnrolledAppProperties.to_json())

# convert the object into a dict
flagged_enrolled_app_properties_dict = flagged_enrolled_app_properties_instance.to_dict()
# create an instance of FlaggedEnrolledAppProperties from a dict
flagged_enrolled_app_properties_from_dict = FlaggedEnrolledAppProperties.from_dict(flagged_enrolled_app_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


