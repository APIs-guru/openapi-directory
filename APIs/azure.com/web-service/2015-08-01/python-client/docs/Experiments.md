# Experiments

Class containing Routing in production experiments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ramp_up_rules** | [**List[RampUpRule]**](RampUpRule.md) | List of {Microsoft.Web.Hosting.Administration.RampUpRule} objects. | [optional] 

## Example

```python
from openapi_client.models.experiments import Experiments

# TODO update the JSON string below
json = "{}"
# create an instance of Experiments from a JSON string
experiments_instance = Experiments.from_json(json)
# print the JSON string representation of the object
print(Experiments.to_json())

# convert the object into a dict
experiments_dict = experiments_instance.to_dict()
# create an instance of Experiments from a dict
experiments_from_dict = Experiments.from_dict(experiments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


