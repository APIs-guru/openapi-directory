# ErrorsGroupOperatingSystemCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** |  | [optional] 
**operating_systems** | [**List[ErrorsGroupOperatingSystemCounts200ResponseOperatingSystemsInner]**](ErrorsGroupOperatingSystemCounts200ResponseOperatingSystemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.errors_group_operating_system_counts200_response import ErrorsGroupOperatingSystemCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupOperatingSystemCounts200Response from a JSON string
errors_group_operating_system_counts200_response_instance = ErrorsGroupOperatingSystemCounts200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupOperatingSystemCounts200Response.to_json())

# convert the object into a dict
errors_group_operating_system_counts200_response_dict = errors_group_operating_system_counts200_response_instance.to_dict()
# create an instance of ErrorsGroupOperatingSystemCounts200Response from a dict
errors_group_operating_system_counts200_response_from_dict = ErrorsGroupOperatingSystemCounts200Response.from_dict(errors_group_operating_system_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


