# AzureMachineLearningWebServiceFunctionBinding

The binding to an Azure Machine Learning web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureMachineLearningWebServiceFunctionBindingProperties**](AzureMachineLearningWebServiceFunctionBindingProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_function_binding import AzureMachineLearningWebServiceFunctionBinding

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceFunctionBinding from a JSON string
azure_machine_learning_web_service_function_binding_instance = AzureMachineLearningWebServiceFunctionBinding.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceFunctionBinding.to_json())

# convert the object into a dict
azure_machine_learning_web_service_function_binding_dict = azure_machine_learning_web_service_function_binding_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceFunctionBinding from a dict
azure_machine_learning_web_service_function_binding_from_dict = AzureMachineLearningWebServiceFunctionBinding.from_dict(azure_machine_learning_web_service_function_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


