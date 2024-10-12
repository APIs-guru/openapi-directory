# EnvironmentMatrix

The matrix of environments in which the test is to be executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_device_list** | [**AndroidDeviceList**](AndroidDeviceList.md) |  | [optional] 
**android_matrix** | [**AndroidMatrix**](AndroidMatrix.md) |  | [optional] 
**ios_device_list** | [**IosDeviceList**](IosDeviceList.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_matrix import EnvironmentMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentMatrix from a JSON string
environment_matrix_instance = EnvironmentMatrix.from_json(json)
# print the JSON string representation of the object
print(EnvironmentMatrix.to_json())

# convert the object into a dict
environment_matrix_dict = environment_matrix_instance.to_dict()
# create an instance of EnvironmentMatrix from a dict
environment_matrix_from_dict = EnvironmentMatrix.from_dict(environment_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


