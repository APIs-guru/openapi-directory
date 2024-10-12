# HeaderActionParameters

Defines the parameters for the request header action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**header_action** | **str** | Action to perform | 
**header_name** | **str** | Name of the header to modify | 
**value** | **str** | Value for the specified action | [optional] 

## Example

```python
from openapi_client.models.header_action_parameters import HeaderActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HeaderActionParameters from a JSON string
header_action_parameters_instance = HeaderActionParameters.from_json(json)
# print the JSON string representation of the object
print(HeaderActionParameters.to_json())

# convert the object into a dict
header_action_parameters_dict = header_action_parameters_instance.to_dict()
# create an instance of HeaderActionParameters from a dict
header_action_parameters_from_dict = HeaderActionParameters.from_dict(header_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


