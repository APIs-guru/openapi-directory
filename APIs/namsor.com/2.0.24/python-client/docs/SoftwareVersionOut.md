# SoftwareVersionOut

The software version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**software_name_and_version** | **str** | The software version | [optional] 
**software_version** | **List[int]** | The software version major minor build | [optional] 

## Example

```python
from openapi_client.models.software_version_out import SoftwareVersionOut

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareVersionOut from a JSON string
software_version_out_instance = SoftwareVersionOut.from_json(json)
# print the JSON string representation of the object
print(SoftwareVersionOut.to_json())

# convert the object into a dict
software_version_out_dict = software_version_out_instance.to_dict()
# create an instance of SoftwareVersionOut from a dict
software_version_out_from_dict = SoftwareVersionOut.from_dict(software_version_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


