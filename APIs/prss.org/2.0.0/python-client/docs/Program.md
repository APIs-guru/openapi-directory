# Program

A program that stations can subscribe to to get live or file content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The date the segment was created. Generated at creation. | [optional] 
**customer_id** | **int** | The ID of the customer that owns this program. | [optional] 
**id** | **int** | The unique ID of the program. Generated at creation. | [optional] 
**last_modified_date** | **datetime** | The date the program was last modified/updated. Automatically updated on any write operation. | [optional] 
**title** | **str** | The title of the program. | 

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


