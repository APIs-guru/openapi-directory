# AadSolutionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** |  | [optional] 
**device_vendor** | **str** |  | [optional] 
**workspace** | [**ConnectedWorkspace**](ConnectedWorkspace.md) |  | [optional] 
**connectivity_state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.aad_solution_properties import AadSolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AadSolutionProperties from a JSON string
aad_solution_properties_instance = AadSolutionProperties.from_json(json)
# print the JSON string representation of the object
print(AadSolutionProperties.to_json())

# convert the object into a dict
aad_solution_properties_dict = aad_solution_properties_instance.to_dict()
# create an instance of AadSolutionProperties from a dict
aad_solution_properties_from_dict = AadSolutionProperties.from_dict(aad_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


