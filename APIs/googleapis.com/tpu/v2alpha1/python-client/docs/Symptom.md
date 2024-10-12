# Symptom

A Symptom instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when the Symptom is created. | [optional] 
**details** | **str** | Detailed information of the current Symptom. | [optional] 
**symptom_type** | **str** | Type of the Symptom. | [optional] 
**worker_id** | **str** | A string used to uniquely distinguish a worker within a TPU node. | [optional] 

## Example

```python
from openapi_client.models.symptom import Symptom

# TODO update the JSON string below
json = "{}"
# create an instance of Symptom from a JSON string
symptom_instance = Symptom.from_json(json)
# print the JSON string representation of the object
print(Symptom.to_json())

# convert the object into a dict
symptom_dict = symptom_instance.to_dict()
# create an instance of Symptom from a dict
symptom_from_dict = Symptom.from_dict(symptom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


