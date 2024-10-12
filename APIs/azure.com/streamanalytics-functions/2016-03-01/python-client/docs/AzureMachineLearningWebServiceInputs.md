# AzureMachineLearningWebServiceInputs

The inputs for the Azure Machine Learning web service endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_names** | [**List[AzureMachineLearningWebServiceInputColumn]**](AzureMachineLearningWebServiceInputColumn.md) | A list of input columns for the Azure Machine Learning web service endpoint. | [optional] 
**name** | **str** | The name of the input. This is the name provided while authoring the endpoint. | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_inputs import AzureMachineLearningWebServiceInputs

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceInputs from a JSON string
azure_machine_learning_web_service_inputs_instance = AzureMachineLearningWebServiceInputs.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceInputs.to_json())

# convert the object into a dict
azure_machine_learning_web_service_inputs_dict = azure_machine_learning_web_service_inputs_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceInputs from a dict
azure_machine_learning_web_service_inputs_from_dict = AzureMachineLearningWebServiceInputs.from_dict(azure_machine_learning_web_service_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


