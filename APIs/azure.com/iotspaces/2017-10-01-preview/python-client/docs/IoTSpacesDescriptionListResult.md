# IoTSpacesDescriptionListResult

A list of IoTSpaces description objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of IoTSpaces description objects. | [optional] 
**value** | [**List[IoTSpacesDescription]**](IoTSpacesDescription.md) | A list of IoTSpaces description objects. | [optional] 

## Example

```python
from openapi_client.models.io_t_spaces_description_list_result import IoTSpacesDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesDescriptionListResult from a JSON string
io_t_spaces_description_list_result_instance = IoTSpacesDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesDescriptionListResult.to_json())

# convert the object into a dict
io_t_spaces_description_list_result_dict = io_t_spaces_description_list_result_instance.to_dict()
# create an instance of IoTSpacesDescriptionListResult from a dict
io_t_spaces_description_list_result_from_dict = IoTSpacesDescriptionListResult.from_dict(io_t_spaces_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


