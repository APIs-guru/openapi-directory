# CognitiveServicesAccountListResult

The list of cognitive services accounts operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CognitiveServicesAccount]**](CognitiveServicesAccount.md) | Gets the list of Cognitive Services accounts and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cognitive_services_account_list_result import CognitiveServicesAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountListResult from a JSON string
cognitive_services_account_list_result_instance = CognitiveServicesAccountListResult.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountListResult.to_json())

# convert the object into a dict
cognitive_services_account_list_result_dict = cognitive_services_account_list_result_instance.to_dict()
# create an instance of CognitiveServicesAccountListResult from a dict
cognitive_services_account_list_result_from_dict = CognitiveServicesAccountListResult.from_dict(cognitive_services_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


