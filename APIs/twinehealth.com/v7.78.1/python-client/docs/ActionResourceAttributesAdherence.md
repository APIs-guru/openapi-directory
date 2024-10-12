# ActionResourceAttributesAdherence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete** | **int** |  | [optional] 
**due** | **int** |  | [optional] 
**streak** | [**ActionResourceAttributesAdherenceStreak**](ActionResourceAttributesAdherenceStreak.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_resource_attributes_adherence import ActionResourceAttributesAdherence

# TODO update the JSON string below
json = "{}"
# create an instance of ActionResourceAttributesAdherence from a JSON string
action_resource_attributes_adherence_instance = ActionResourceAttributesAdherence.from_json(json)
# print the JSON string representation of the object
print(ActionResourceAttributesAdherence.to_json())

# convert the object into a dict
action_resource_attributes_adherence_dict = action_resource_attributes_adherence_instance.to_dict()
# create an instance of ActionResourceAttributesAdherence from a dict
action_resource_attributes_adherence_from_dict = ActionResourceAttributesAdherence.from_dict(action_resource_attributes_adherence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


