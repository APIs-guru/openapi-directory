# OperatorConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbt** | [**OperatorDbt**](OperatorDbt.md) |  | [optional] 
**normalization** | [**OperatorNormalization**](OperatorNormalization.md) |  | [optional] 
**operator_type** | [**OperatorType**](OperatorType.md) |  | 
**webhook** | [**OperatorWebhook**](OperatorWebhook.md) |  | [optional] 

## Example

```python
from openapi_client.models.operator_configuration import OperatorConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of OperatorConfiguration from a JSON string
operator_configuration_instance = OperatorConfiguration.from_json(json)
# print the JSON string representation of the object
print(OperatorConfiguration.to_json())

# convert the object into a dict
operator_configuration_dict = operator_configuration_instance.to_dict()
# create an instance of OperatorConfiguration from a dict
operator_configuration_from_dict = OperatorConfiguration.from_dict(operator_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


