# EnvironmentDetails

Contains information about the environment Play Integrity API runs in, e.g. Play Protect verdict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_access_risk_verdict** | [**AppAccessRiskVerdict**](AppAccessRiskVerdict.md) |  | [optional] 
**play_protect_verdict** | **str** | The evaluation of Play Protect verdict. | [optional] 

## Example

```python
from openapi_client.models.environment_details import EnvironmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentDetails from a JSON string
environment_details_instance = EnvironmentDetails.from_json(json)
# print the JSON string representation of the object
print(EnvironmentDetails.to_json())

# convert the object into a dict
environment_details_dict = environment_details_instance.to_dict()
# create an instance of EnvironmentDetails from a dict
environment_details_from_dict = EnvironmentDetails.from_dict(environment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


