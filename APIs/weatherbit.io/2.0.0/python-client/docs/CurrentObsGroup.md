# CurrentObsGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of found observations | [optional] 
**data** | [**List[CurrentObs]**](CurrentObs.md) |  | [optional] 

## Example

```python
from openapi_client.models.current_obs_group import CurrentObsGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentObsGroup from a JSON string
current_obs_group_instance = CurrentObsGroup.from_json(json)
# print the JSON string representation of the object
print(CurrentObsGroup.to_json())

# convert the object into a dict
current_obs_group_dict = current_obs_group_instance.to_dict()
# create an instance of CurrentObsGroup from a dict
current_obs_group_from_dict = CurrentObsGroup.from_dict(current_obs_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


