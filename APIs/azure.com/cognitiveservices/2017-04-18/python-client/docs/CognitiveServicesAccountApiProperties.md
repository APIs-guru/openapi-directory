# CognitiveServicesAccountApiProperties

The api properties for special APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hub_connection_string** | **str** | (Personalization Only) The flag to enable statistics of Bing Search. | [optional] 
**qna_runtime_endpoint** | **str** | (QnAMaker Only) The runtime endpoint of QnAMaker. | [optional] 
**statistics_enabled** | **bool** | (Bing Search Only) The flag to enable statistics of Bing Search. | [optional] 
**storage_account_connection_string** | **str** | (Personalization Only) The storage account connection string. | [optional] 

## Example

```python
from openapi_client.models.cognitive_services_account_api_properties import CognitiveServicesAccountApiProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountApiProperties from a JSON string
cognitive_services_account_api_properties_instance = CognitiveServicesAccountApiProperties.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountApiProperties.to_json())

# convert the object into a dict
cognitive_services_account_api_properties_dict = cognitive_services_account_api_properties_instance.to_dict()
# create an instance of CognitiveServicesAccountApiProperties from a dict
cognitive_services_account_api_properties_from_dict = CognitiveServicesAccountApiProperties.from_dict(cognitive_services_account_api_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


