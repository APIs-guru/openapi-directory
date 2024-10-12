# LabVhdList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[LabVhd]**](LabVhd.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.lab_vhd_list import LabVhdList

# TODO update the JSON string below
json = "{}"
# create an instance of LabVhdList from a JSON string
lab_vhd_list_instance = LabVhdList.from_json(json)
# print the JSON string representation of the object
print(LabVhdList.to_json())

# convert the object into a dict
lab_vhd_list_dict = lab_vhd_list_instance.to_dict()
# create an instance of LabVhdList from a dict
lab_vhd_list_from_dict = LabVhdList.from_dict(lab_vhd_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


