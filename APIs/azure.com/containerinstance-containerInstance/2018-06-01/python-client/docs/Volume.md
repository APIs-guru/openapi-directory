# Volume

The properties of the volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file** | [**AzureFileVolume**](AzureFileVolume.md) |  | [optional] 
**empty_dir** | **object** | The empty directory volume. | [optional] 
**git_repo** | [**GitRepoVolume**](GitRepoVolume.md) |  | [optional] 
**name** | **str** | The name of the volume. | 
**secret** | **Dict[str, str]** | The secret volume. | [optional] 

## Example

```python
from openapi_client.models.volume import Volume

# TODO update the JSON string below
json = "{}"
# create an instance of Volume from a JSON string
volume_instance = Volume.from_json(json)
# print the JSON string representation of the object
print(Volume.to_json())

# convert the object into a dict
volume_dict = volume_instance.to_dict()
# create an instance of Volume from a dict
volume_from_dict = Volume.from_dict(volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


