# RepositoryAttributes

Repository attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeable_attributes** | [**ChangeableAttributes**](ChangeableAttributes.md) |  | [optional] 
**created_time** | **str** | Image created time | [optional] 
**image_name** | **str** | Image name | [optional] 
**last_update_time** | **str** | Image last update time | [optional] 
**manifest_count** | **int** | Number of the manifests | [optional] 
**registry** | **str** | Registry name | [optional] 
**tag_count** | **int** | Number of the tags | [optional] 

## Example

```python
from openapi_client.models.repository_attributes import RepositoryAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoryAttributes from a JSON string
repository_attributes_instance = RepositoryAttributes.from_json(json)
# print the JSON string representation of the object
print(RepositoryAttributes.to_json())

# convert the object into a dict
repository_attributes_dict = repository_attributes_instance.to_dict()
# create an instance of RepositoryAttributes from a dict
repository_attributes_from_dict = RepositoryAttributes.from_dict(repository_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


