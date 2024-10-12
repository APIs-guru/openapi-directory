# AppVersionRange

Data format for a continuous range of app versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_code_end** | **str** | Highest app version in the range, inclusive. | [optional] 
**version_code_start** | **str** | Lowest app version in the range, inclusive. | [optional] 

## Example

```python
from openapi_client.models.app_version_range import AppVersionRange

# TODO update the JSON string below
json = "{}"
# create an instance of AppVersionRange from a JSON string
app_version_range_instance = AppVersionRange.from_json(json)
# print the JSON string representation of the object
print(AppVersionRange.to_json())

# convert the object into a dict
app_version_range_dict = app_version_range_instance.to_dict()
# create an instance of AppVersionRange from a dict
app_version_range_from_dict = AppVersionRange.from_dict(app_version_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


