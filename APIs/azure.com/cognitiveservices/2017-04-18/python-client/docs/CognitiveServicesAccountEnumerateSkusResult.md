# CognitiveServicesAccountEnumerateSkusResult

The list of cognitive services accounts operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CognitiveServicesResourceAndSku]**](CognitiveServicesResourceAndSku.md) | Gets the list of Cognitive Services accounts and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cognitive_services_account_enumerate_skus_result import CognitiveServicesAccountEnumerateSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountEnumerateSkusResult from a JSON string
cognitive_services_account_enumerate_skus_result_instance = CognitiveServicesAccountEnumerateSkusResult.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountEnumerateSkusResult.to_json())

# convert the object into a dict
cognitive_services_account_enumerate_skus_result_dict = cognitive_services_account_enumerate_skus_result_instance.to_dict()
# create an instance of CognitiveServicesAccountEnumerateSkusResult from a dict
cognitive_services_account_enumerate_skus_result_from_dict = CognitiveServicesAccountEnumerateSkusResult.from_dict(cognitive_services_account_enumerate_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


