# Canary

Canary represents the canary deployment strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canary_deployment** | [**CanaryDeployment**](CanaryDeployment.md) |  | [optional] 
**custom_canary_deployment** | [**CustomCanaryDeployment**](CustomCanaryDeployment.md) |  | [optional] 
**runtime_config** | [**RuntimeConfig**](RuntimeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.canary import Canary

# TODO update the JSON string below
json = "{}"
# create an instance of Canary from a JSON string
canary_instance = Canary.from_json(json)
# print the JSON string representation of the object
print(Canary.to_json())

# convert the object into a dict
canary_dict = canary_instance.to_dict()
# create an instance of Canary from a dict
canary_from_dict = Canary.from_dict(canary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


