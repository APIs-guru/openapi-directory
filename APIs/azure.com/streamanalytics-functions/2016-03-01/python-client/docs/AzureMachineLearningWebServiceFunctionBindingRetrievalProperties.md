# AzureMachineLearningWebServiceFunctionBindingRetrievalProperties

The binding retrieval properties associated with an Azure Machine learning web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execute_endpoint** | **str** | The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs | [optional] 
**udf_type** | [**UdfType**](UdfType.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_function_binding_retrieval_properties import AzureMachineLearningWebServiceFunctionBindingRetrievalProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceFunctionBindingRetrievalProperties from a JSON string
azure_machine_learning_web_service_function_binding_retrieval_properties_instance = AzureMachineLearningWebServiceFunctionBindingRetrievalProperties.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceFunctionBindingRetrievalProperties.to_json())

# convert the object into a dict
azure_machine_learning_web_service_function_binding_retrieval_properties_dict = azure_machine_learning_web_service_function_binding_retrieval_properties_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceFunctionBindingRetrievalProperties from a dict
azure_machine_learning_web_service_function_binding_retrieval_properties_from_dict = AzureMachineLearningWebServiceFunctionBindingRetrievalProperties.from_dict(azure_machine_learning_web_service_function_binding_retrieval_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


