# CognitiveServicesAccountKeys

The access keys for the cognitive services account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **str** | Gets the value of key 1. | [optional] 
**key2** | **str** | Gets the value of key 2. | [optional] 

## Example

```python
from openapi_client.models.cognitive_services_account_keys import CognitiveServicesAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountKeys from a JSON string
cognitive_services_account_keys_instance = CognitiveServicesAccountKeys.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountKeys.to_json())

# convert the object into a dict
cognitive_services_account_keys_dict = cognitive_services_account_keys_instance.to_dict()
# create an instance of CognitiveServicesAccountKeys from a dict
cognitive_services_account_keys_from_dict = CognitiveServicesAccountKeys.from_dict(cognitive_services_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


