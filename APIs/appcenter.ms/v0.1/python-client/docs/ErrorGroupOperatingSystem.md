# ErrorGroupOperatingSystem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** | count of OS | [optional] 
**operating_system_name** | **str** | OS name | [optional] 

## Example

```python
from openapi_client.models.error_group_operating_system import ErrorGroupOperatingSystem

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupOperatingSystem from a JSON string
error_group_operating_system_instance = ErrorGroupOperatingSystem.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupOperatingSystem.to_json())

# convert the object into a dict
error_group_operating_system_dict = error_group_operating_system_instance.to_dict()
# create an instance of ErrorGroupOperatingSystem from a dict
error_group_operating_system_from_dict = ErrorGroupOperatingSystem.from_dict(error_group_operating_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


