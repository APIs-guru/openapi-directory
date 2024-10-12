# CsmPublishingProfileOptions

Publishing options for requested profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Name of the format. Valid values are:               FileZilla3              WebDeploy -- default              Ftp | [optional] 

## Example

```python
from openapi_client.models.csm_publishing_profile_options import CsmPublishingProfileOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CsmPublishingProfileOptions from a JSON string
csm_publishing_profile_options_instance = CsmPublishingProfileOptions.from_json(json)
# print the JSON string representation of the object
print(CsmPublishingProfileOptions.to_json())

# convert the object into a dict
csm_publishing_profile_options_dict = csm_publishing_profile_options_instance.to_dict()
# create an instance of CsmPublishingProfileOptions from a dict
csm_publishing_profile_options_from_dict = CsmPublishingProfileOptions.from_dict(csm_publishing_profile_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


