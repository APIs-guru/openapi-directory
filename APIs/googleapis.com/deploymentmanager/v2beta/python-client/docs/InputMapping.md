# InputMapping

InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | The name of the field that is going to be injected. | [optional] 
**location** | **str** | The location where this mapping applies. | [optional] 
**method_match** | **str** | Regex to evaluate on method to decide if input applies. | [optional] 
**value** | **str** | A jsonPath expression to select an element. | [optional] 

## Example

```python
from openapi_client.models.input_mapping import InputMapping

# TODO update the JSON string below
json = "{}"
# create an instance of InputMapping from a JSON string
input_mapping_instance = InputMapping.from_json(json)
# print the JSON string representation of the object
print(InputMapping.to_json())

# convert the object into a dict
input_mapping_dict = input_mapping_instance.to_dict()
# create an instance of InputMapping from a dict
input_mapping_from_dict = InputMapping.from_dict(input_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


