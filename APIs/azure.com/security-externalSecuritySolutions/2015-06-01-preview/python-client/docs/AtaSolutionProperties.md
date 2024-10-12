# AtaSolutionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_event_received** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**device_vendor** | **str** |  | [optional] 
**workspace** | [**ConnectedWorkspace**](ConnectedWorkspace.md) |  | [optional] 

## Example

```python
from openapi_client.models.ata_solution_properties import AtaSolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AtaSolutionProperties from a JSON string
ata_solution_properties_instance = AtaSolutionProperties.from_json(json)
# print the JSON string representation of the object
print(AtaSolutionProperties.to_json())

# convert the object into a dict
ata_solution_properties_dict = ata_solution_properties_instance.to_dict()
# create an instance of AtaSolutionProperties from a dict
ata_solution_properties_from_dict = AtaSolutionProperties.from_dict(ata_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


