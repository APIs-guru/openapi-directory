# CreateContainerVersionRequestVersionOptions

Options for new container versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the container version to be created. | [optional] 
**notes** | **str** | The notes of the container version to be created. | [optional] 

## Example

```python
from openapi_client.models.create_container_version_request_version_options import CreateContainerVersionRequestVersionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContainerVersionRequestVersionOptions from a JSON string
create_container_version_request_version_options_instance = CreateContainerVersionRequestVersionOptions.from_json(json)
# print the JSON string representation of the object
print(CreateContainerVersionRequestVersionOptions.to_json())

# convert the object into a dict
create_container_version_request_version_options_dict = create_container_version_request_version_options_instance.to_dict()
# create an instance of CreateContainerVersionRequestVersionOptions from a dict
create_container_version_request_version_options_from_dict = CreateContainerVersionRequestVersionOptions.from_dict(create_container_version_request_version_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


