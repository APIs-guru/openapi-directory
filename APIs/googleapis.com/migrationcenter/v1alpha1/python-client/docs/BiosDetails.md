# BiosDetails

Details about the BIOS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bios_manufacturer** | **str** | BIOS manufacturer. | [optional] 
**bios_name** | **str** | BIOS name. | [optional] 
**bios_release_date** | **str** | BIOS release date. | [optional] 
**bios_version** | **str** | BIOS version. | [optional] 
**smbios_uuid** | **str** | SMBIOS UUID. | [optional] 

## Example

```python
from openapi_client.models.bios_details import BiosDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BiosDetails from a JSON string
bios_details_instance = BiosDetails.from_json(json)
# print the JSON string representation of the object
print(BiosDetails.to_json())

# convert the object into a dict
bios_details_dict = bios_details_instance.to_dict()
# create an instance of BiosDetails from a dict
bios_details_from_dict = BiosDetails.from_dict(bios_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


