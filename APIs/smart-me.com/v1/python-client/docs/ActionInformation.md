# ActionInformation

The Information about an Action of a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | The Type of this action. | [optional] 
**max_value** | **float** | The maximum value of this action (e.g. for an AnalogAction) | [optional] 
**min_value** | **float** | The minimum value of this action (e.g. for an AnalogAction) | [optional] 
**name** | **str** | The Name of this action | [optional] 
**obis_code** | **str** | The Obis Code of this action. This is used as ID. | [optional] 

## Example

```python
from openapi_client.models.action_information import ActionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ActionInformation from a JSON string
action_information_instance = ActionInformation.from_json(json)
# print the JSON string representation of the object
print(ActionInformation.to_json())

# convert the object into a dict
action_information_dict = action_information_instance.to_dict()
# create an instance of ActionInformation from a dict
action_information_from_dict = ActionInformation.from_dict(action_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


