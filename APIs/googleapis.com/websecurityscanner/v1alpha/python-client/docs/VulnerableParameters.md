# VulnerableParameters

Information about vulnerable request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_names** | **List[str]** | The vulnerable parameter names. | [optional] 

## Example

```python
from openapi_client.models.vulnerable_parameters import VulnerableParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerableParameters from a JSON string
vulnerable_parameters_instance = VulnerableParameters.from_json(json)
# print the JSON string representation of the object
print(VulnerableParameters.to_json())

# convert the object into a dict
vulnerable_parameters_dict = vulnerable_parameters_instance.to_dict()
# create an instance of VulnerableParameters from a dict
vulnerable_parameters_from_dict = VulnerableParameters.from_dict(vulnerable_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


