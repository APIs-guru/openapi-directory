# SasPortalDeviceMetadata

Device data overridable by both SAS Portal and registration requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antenna_model** | **str** | If populated, the Antenna Model Pattern to use. Format is: &#x60;RecordCreatorId:PatternId&#x60; | [optional] 
**common_channel_group** | **str** | Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). | [optional] 
**interference_coordination_group** | **str** | Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). | [optional] 
**nrqz_validated** | **bool** | Output only. Set to &#x60;true&#x60; if a CPI has validated that they have coordinated with the National Quiet Zone office. | [optional] [readonly] 
**nrqz_validation** | [**SasPortalNrqzValidation**](SasPortalNrqzValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device_metadata import SasPortalDeviceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeviceMetadata from a JSON string
sas_portal_device_metadata_instance = SasPortalDeviceMetadata.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeviceMetadata.to_json())

# convert the object into a dict
sas_portal_device_metadata_dict = sas_portal_device_metadata_instance.to_dict()
# create an instance of SasPortalDeviceMetadata from a dict
sas_portal_device_metadata_from_dict = SasPortalDeviceMetadata.from_dict(sas_portal_device_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


