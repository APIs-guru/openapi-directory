# EnergyObsGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of found observations | [optional] 
**data** | [**List[EnergyObs]**](EnergyObs.md) |  | [optional] 
**end_date** | **int** | End Date | [optional] 
**start_date** | **int** | Start Date | [optional] 

## Example

```python
from openapi_client.models.energy_obs_group import EnergyObsGroup

# TODO update the JSON string below
json = "{}"
# create an instance of EnergyObsGroup from a JSON string
energy_obs_group_instance = EnergyObsGroup.from_json(json)
# print the JSON string representation of the object
print(EnergyObsGroup.to_json())

# convert the object into a dict
energy_obs_group_dict = energy_obs_group_instance.to_dict()
# create an instance of EnergyObsGroup from a dict
energy_obs_group_from_dict = EnergyObsGroup.from_dict(energy_obs_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


