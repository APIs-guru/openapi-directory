# AptRepository

Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_type** | **str** | Type of archive files in this repository. The default behavior is DEB. | [optional] 
**components** | **List[str]** | Required. List of components for this repository. Must contain at least one item. | [optional] 
**distribution** | **str** | Required. Distribution of this repository. | [optional] 
**gpg_key** | **str** | URI of the key file for this repository. The agent maintains a keyring at &#x60;/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg&#x60; containing all the keys in any applied guest policy. | [optional] 
**uri** | **str** | Required. URI for this repository. | [optional] 

## Example

```python
from openapi_client.models.apt_repository import AptRepository

# TODO update the JSON string below
json = "{}"
# create an instance of AptRepository from a JSON string
apt_repository_instance = AptRepository.from_json(json)
# print the JSON string representation of the object
print(AptRepository.to_json())

# convert the object into a dict
apt_repository_dict = apt_repository_instance.to_dict()
# create an instance of AptRepository from a dict
apt_repository_from_dict = AptRepository.from_dict(apt_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


