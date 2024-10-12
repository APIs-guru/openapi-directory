# SourceUpdateParameters

The properties for updating the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The branch name of the source code. | [optional] 
**repository_url** | **str** | The full URL to the source code repository | [optional] 
**source_control_auth_properties** | [**AuthInfoUpdateParameters**](AuthInfoUpdateParameters.md) |  | [optional] 
**source_control_type** | **str** | The type of source control service. | [optional] 

## Example

```python
from openapi_client.models.source_update_parameters import SourceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceUpdateParameters from a JSON string
source_update_parameters_instance = SourceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceUpdateParameters.to_json())

# convert the object into a dict
source_update_parameters_dict = source_update_parameters_instance.to_dict()
# create an instance of SourceUpdateParameters from a dict
source_update_parameters_from_dict = SourceUpdateParameters.from_dict(source_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


