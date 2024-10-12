# AddDisksInput

Input for add disk(s) operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AddDisksInputProperties**](AddDisksInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_disks_input import AddDisksInput

# TODO update the JSON string below
json = "{}"
# create an instance of AddDisksInput from a JSON string
add_disks_input_instance = AddDisksInput.from_json(json)
# print the JSON string representation of the object
print(AddDisksInput.to_json())

# convert the object into a dict
add_disks_input_dict = add_disks_input_instance.to_dict()
# create an instance of AddDisksInput from a dict
add_disks_input_from_dict = AddDisksInput.from_dict(add_disks_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


