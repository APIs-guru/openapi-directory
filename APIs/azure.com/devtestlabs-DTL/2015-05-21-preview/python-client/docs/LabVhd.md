# LabVhd

Properties of a VHD in the lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The absolute URI of the VHD. | [optional] 

## Example

```python
from openapi_client.models.lab_vhd import LabVhd

# TODO update the JSON string below
json = "{}"
# create an instance of LabVhd from a JSON string
lab_vhd_instance = LabVhd.from_json(json)
# print the JSON string representation of the object
print(LabVhd.to_json())

# convert the object into a dict
lab_vhd_dict = lab_vhd_instance.to_dict()
# create an instance of LabVhd from a dict
lab_vhd_from_dict = LabVhd.from_dict(lab_vhd_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


