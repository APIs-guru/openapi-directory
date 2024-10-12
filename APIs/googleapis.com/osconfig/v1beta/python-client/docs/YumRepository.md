# YumRepository

Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | Required. The location of the repository directory. | [optional] 
**display_name** | **str** | The display name of the repository. | [optional] 
**gpg_keys** | **List[str]** | URIs of GPG keys. | [optional] 
**id** | **str** | Required. A one word, unique name for this repository. This is the &#x60;repo id&#x60; in the Yum config file and also the &#x60;display_name&#x60; if &#x60;display_name&#x60; is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. | [optional] 

## Example

```python
from openapi_client.models.yum_repository import YumRepository

# TODO update the JSON string below
json = "{}"
# create an instance of YumRepository from a JSON string
yum_repository_instance = YumRepository.from_json(json)
# print the JSON string representation of the object
print(YumRepository.to_json())

# convert the object into a dict
yum_repository_dict = yum_repository_instance.to_dict()
# create an instance of YumRepository from a dict
yum_repository_from_dict = YumRepository.from_dict(yum_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


