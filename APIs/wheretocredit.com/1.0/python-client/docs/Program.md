# Program


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airlines** | **List[str]** | Two-letter IATA carrier codes that are associated with the frequent flyer program. | [optional] 
**denomination** | **str** | Name of the unit of a mile or point. | [optional] 
**full_name** | **str** | Full name of the frequent flyer program including the airline, if applicable. | [optional] 
**id** | **str** | Unique identifier for the frequent flyer program. | [optional] 
**program_name** | **str** | Name of the frequent flyer program. | [optional] 
**tier_names** | **List[str]** | Name of each tier level for the frequent flyer program. | [optional] 

## Example

```python
from openapi_client.models.program import Program

# TODO update the JSON string below
json = "{}"
# create an instance of Program from a JSON string
program_instance = Program.from_json(json)
# print the JSON string representation of the object
print(Program.to_json())

# convert the object into a dict
program_dict = program_instance.to_dict()
# create an instance of Program from a dict
program_from_dict = Program.from_dict(program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


