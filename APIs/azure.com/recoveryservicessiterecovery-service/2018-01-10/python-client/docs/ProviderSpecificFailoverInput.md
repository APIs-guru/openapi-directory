# ProviderSpecificFailoverInput

Provider specific failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.provider_specific_failover_input import ProviderSpecificFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderSpecificFailoverInput from a JSON string
provider_specific_failover_input_instance = ProviderSpecificFailoverInput.from_json(json)
# print the JSON string representation of the object
print(ProviderSpecificFailoverInput.to_json())

# convert the object into a dict
provider_specific_failover_input_dict = provider_specific_failover_input_instance.to_dict()
# create an instance of ProviderSpecificFailoverInput from a dict
provider_specific_failover_input_from_dict = ProviderSpecificFailoverInput.from_dict(provider_specific_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


