# Lab

A lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LabProperties**](LabProperties.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab import Lab

# TODO update the JSON string below
json = "{}"
# create an instance of Lab from a JSON string
lab_instance = Lab.from_json(json)
# print the JSON string representation of the object
print(Lab.to_json())

# convert the object into a dict
lab_dict = lab_instance.to_dict()
# create an instance of Lab from a dict
lab_from_dict = Lab.from_dict(lab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


