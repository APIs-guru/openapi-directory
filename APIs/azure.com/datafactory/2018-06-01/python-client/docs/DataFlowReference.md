# DataFlowReference

Data flow reference type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_parameters** | **object** | Reference data flow parameters from dataset. | [optional] 
**reference_name** | **str** | Reference data flow name. | 
**type** | **str** | Data flow reference type. | 

## Example

```python
from openapi_client.models.data_flow_reference import DataFlowReference

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowReference from a JSON string
data_flow_reference_instance = DataFlowReference.from_json(json)
# print the JSON string representation of the object
print(DataFlowReference.to_json())

# convert the object into a dict
data_flow_reference_dict = data_flow_reference_instance.to_dict()
# create an instance of DataFlowReference from a dict
data_flow_reference_from_dict = DataFlowReference.from_dict(data_flow_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


