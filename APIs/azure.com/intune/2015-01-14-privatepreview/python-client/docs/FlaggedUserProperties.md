# FlaggedUserProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** |  | [optional] [readonly] 
**friendly_name** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.flagged_user_properties import FlaggedUserProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedUserProperties from a JSON string
flagged_user_properties_instance = FlaggedUserProperties.from_json(json)
# print the JSON string representation of the object
print(FlaggedUserProperties.to_json())

# convert the object into a dict
flagged_user_properties_dict = flagged_user_properties_instance.to_dict()
# create an instance of FlaggedUserProperties from a dict
flagged_user_properties_from_dict = FlaggedUserProperties.from_dict(flagged_user_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


