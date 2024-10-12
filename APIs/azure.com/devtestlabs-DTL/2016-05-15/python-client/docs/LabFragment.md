# LabFragment

A lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LabPropertiesFragment**](LabPropertiesFragment.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_fragment import LabFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabFragment from a JSON string
lab_fragment_instance = LabFragment.from_json(json)
# print the JSON string representation of the object
print(LabFragment.to_json())

# convert the object into a dict
lab_fragment_dict = lab_fragment_instance.to_dict()
# create an instance of LabFragment from a dict
lab_fragment_from_dict = LabFragment.from_dict(lab_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


