# AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters

The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding_retrieval_properties** | [**AzureMachineLearningWebServiceFunctionBindingRetrievalProperties**](AzureMachineLearningWebServiceFunctionBindingRetrievalProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_function_retrieve_default_definition_parameters import AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters from a JSON string
azure_machine_learning_web_service_function_retrieve_default_definition_parameters_instance = AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters.to_json())

# convert the object into a dict
azure_machine_learning_web_service_function_retrieve_default_definition_parameters_dict = azure_machine_learning_web_service_function_retrieve_default_definition_parameters_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters from a dict
azure_machine_learning_web_service_function_retrieve_default_definition_parameters_from_dict = AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters.from_dict(azure_machine_learning_web_service_function_retrieve_default_definition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


