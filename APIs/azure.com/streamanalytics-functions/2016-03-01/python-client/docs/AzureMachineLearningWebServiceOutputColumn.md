# AzureMachineLearningWebServiceOutputColumn

Describes an output column for the Azure Machine Learning web service endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx . | [optional] 
**name** | **str** | The name of the output column. | [optional] 

## Example

```python
from openapi_client.models.azure_machine_learning_web_service_output_column import AzureMachineLearningWebServiceOutputColumn

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMachineLearningWebServiceOutputColumn from a JSON string
azure_machine_learning_web_service_output_column_instance = AzureMachineLearningWebServiceOutputColumn.from_json(json)
# print the JSON string representation of the object
print(AzureMachineLearningWebServiceOutputColumn.to_json())

# convert the object into a dict
azure_machine_learning_web_service_output_column_dict = azure_machine_learning_web_service_output_column_instance.to_dict()
# create an instance of AzureMachineLearningWebServiceOutputColumn from a dict
azure_machine_learning_web_service_output_column_from_dict = AzureMachineLearningWebServiceOutputColumn.from_dict(azure_machine_learning_web_service_output_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


