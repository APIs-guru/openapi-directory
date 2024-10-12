# AcrRepositoryTags

List of tag details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**registry** | **str** | Registry name | [optional] 
**tags** | [**List[AcrTagAttributesBase]**](AcrTagAttributesBase.md) | List of tag attribute details | [optional] 

## Example

```python
from openapi_client.models.acr_repository_tags import AcrRepositoryTags

# TODO update the JSON string below
json = "{}"
# create an instance of AcrRepositoryTags from a JSON string
acr_repository_tags_instance = AcrRepositoryTags.from_json(json)
# print the JSON string representation of the object
print(AcrRepositoryTags.to_json())

# convert the object into a dict
acr_repository_tags_dict = acr_repository_tags_instance.to_dict()
# create an instance of AcrRepositoryTags from a dict
acr_repository_tags_from_dict = AcrRepositoryTags.from_dict(acr_repository_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


