# ApiVersionSetUpdateParameters

Parameters to update or create an Api Version Set Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiVersionSetUpdateParametersProperties**](ApiVersionSetUpdateParametersProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_version_set_update_parameters import ApiVersionSetUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetUpdateParameters from a JSON string
api_version_set_update_parameters_instance = ApiVersionSetUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetUpdateParameters.to_json())

# convert the object into a dict
api_version_set_update_parameters_dict = api_version_set_update_parameters_instance.to_dict()
# create an instance of ApiVersionSetUpdateParameters from a dict
api_version_set_update_parameters_from_dict = ApiVersionSetUpdateParameters.from_dict(api_version_set_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


