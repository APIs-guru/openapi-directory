# EntityNameAvailabilityCheckOutput

The response from the check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Specifies the detailed reason if the name is not available. | [optional] 
**name_available** | **bool** | Specifies if the name is available. | 
**reason** | **str** | Specifies the reason if the name is not available. | [optional] 

## Example

```python
from openapi_client.models.entity_name_availability_check_output import EntityNameAvailabilityCheckOutput

# TODO update the JSON string below
json = "{}"
# create an instance of EntityNameAvailabilityCheckOutput from a JSON string
entity_name_availability_check_output_instance = EntityNameAvailabilityCheckOutput.from_json(json)
# print the JSON string representation of the object
print(EntityNameAvailabilityCheckOutput.to_json())

# convert the object into a dict
entity_name_availability_check_output_dict = entity_name_availability_check_output_instance.to_dict()
# create an instance of EntityNameAvailabilityCheckOutput from a dict
entity_name_availability_check_output_from_dict = EntityNameAvailabilityCheckOutput.from_dict(entity_name_availability_check_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


