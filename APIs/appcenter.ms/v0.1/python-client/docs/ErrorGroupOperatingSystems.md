# ErrorGroupOperatingSystems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** |  | [optional] 
**operating_systems** | [**List[ErrorsGroupOperatingSystemCounts200ResponseOperatingSystemsInner]**](ErrorsGroupOperatingSystemCounts200ResponseOperatingSystemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_group_operating_systems import ErrorGroupOperatingSystems

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupOperatingSystems from a JSON string
error_group_operating_systems_instance = ErrorGroupOperatingSystems.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupOperatingSystems.to_json())

# convert the object into a dict
error_group_operating_systems_dict = error_group_operating_systems_instance.to_dict()
# create an instance of ErrorGroupOperatingSystems from a dict
error_group_operating_systems_from_dict = ErrorGroupOperatingSystems.from_dict(error_group_operating_systems_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


