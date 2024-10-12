# Criticality

Criticality of the Application, Service, or Workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | Optional. Criticality level. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. | [optional] 
**mission_critical** | **bool** | Optional. Indicates mission-critical Application, Service, or Workload. | [optional] 
**type** | **str** | Required. Criticality Type. | [optional] 

## Example

```python
from openapi_client.models.criticality import Criticality

# TODO update the JSON string below
json = "{}"
# create an instance of Criticality from a JSON string
criticality_instance = Criticality.from_json(json)
# print the JSON string representation of the object
print(Criticality.to_json())

# convert the object into a dict
criticality_dict = criticality_instance.to_dict()
# create an instance of Criticality from a dict
criticality_from_dict = Criticality.from_dict(criticality_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


