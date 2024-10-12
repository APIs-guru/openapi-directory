# AzureMachineLearningWebServiceFunctionBindingProperties

The binding properties associated with an Azure Machine learning web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The API key used to authenticate with Request-Response endpoint. | [optional] 
**batch_size** | **int** | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | [optional] 
**endpoint** | **str** | The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs | [optional] 
**inputs** | [**AzureMachineLearningWebServiceInputs**](AzureMachineLearningWebServiceInputs.md) |  | [optional] 
**outputs** | [**List[AzureMachineLearningWebServiceOutputColumn]**](AzureMachineLearningWebServiceOutputColumn.md) | A list of outputs from the Azure Machine Learning web service endpoint execution. | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_function_binding_properties import AzureMachineLearningWebServiceFunctionBindingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceFunctionBindingProperties from a JSON string
azure_machine_learning_web_service_function_binding_properties_instance = AzureMachineLearningWebServiceFunctionBindingProperties.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceFunctionBindingProperties.to_json())

# convert the object into a dict
azure_machine_learning_web_service_function_binding_properties_dict = azure_machine_learning_web_service_function_binding_properties_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceFunctionBindingProperties from a dict
azure_machine_learning_web_service_function_binding_properties_from_dict = AzureMachineLearningWebServiceFunctionBindingProperties.from_dict(azure_machine_learning_web_service_function_binding_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


