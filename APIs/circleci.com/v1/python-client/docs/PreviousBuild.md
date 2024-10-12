# PreviousBuild

previous build

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_num** | **int** |  | [optional] 
**build_time_millis** | **int** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.previous_build import PreviousBuild

# TODO update the JSON string below
json = "{}"
# create an instance of PreviousBuild from a JSON string
previous_build_instance = PreviousBuild.from_json(json)
# print the JSON string representation of the object
print(PreviousBuild.to_json())

# convert the object into a dict
previous_build_dict = previous_build_instance.to_dict()
# create an instance of PreviousBuild from a dict
previous_build_from_dict = PreviousBuild.from_dict(previous_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


