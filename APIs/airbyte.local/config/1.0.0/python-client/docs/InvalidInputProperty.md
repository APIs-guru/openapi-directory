# InvalidInputProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invalid_value** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**property_path** | **str** |  | 

## Example

```python
from openapi_client.models.invalid_input_property import InvalidInputProperty

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidInputProperty from a JSON string
invalid_input_property_instance = InvalidInputProperty.from_json(json)
# print the JSON string representation of the object
print(InvalidInputProperty.to_json())

# convert the object into a dict
invalid_input_property_dict = invalid_input_property_instance.to_dict()
# create an instance of InvalidInputProperty from a dict
invalid_input_property_from_dict = InvalidInputProperty.from_dict(invalid_input_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


