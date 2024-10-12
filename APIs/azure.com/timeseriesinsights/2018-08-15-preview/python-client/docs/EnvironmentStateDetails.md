# EnvironmentStateDetails

An object that contains the details about an environment's state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Contains the code that represents the reason of an environment being in a particular state. Can be used to programmatically handle specific cases. | [optional] 
**message** | **str** | A message that describes the state in detail. | [optional] 

## Example

```python
from openapi_client.models.environment_state_details import EnvironmentStateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentStateDetails from a JSON string
environment_state_details_instance = EnvironmentStateDetails.from_json(json)
# print the JSON string representation of the object
print(EnvironmentStateDetails.to_json())

# convert the object into a dict
environment_state_details_dict = environment_state_details_instance.to_dict()
# create an instance of EnvironmentStateDetails from a dict
environment_state_details_from_dict = EnvironmentStateDetails.from_dict(environment_state_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


