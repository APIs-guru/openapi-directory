# StartEnvironmentMetadata

Message included in the metadata field of operations returned from StartEnvironment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Current state of the environment being started. | [optional] 

## Example

```python
from openapi_client.models.start_environment_metadata import StartEnvironmentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StartEnvironmentMetadata from a JSON string
start_environment_metadata_instance = StartEnvironmentMetadata.from_json(json)
# print the JSON string representation of the object
print(StartEnvironmentMetadata.to_json())

# convert the object into a dict
start_environment_metadata_dict = start_environment_metadata_instance.to_dict()
# create an instance of StartEnvironmentMetadata from a dict
start_environment_metadata_from_dict = StartEnvironmentMetadata.from_dict(start_environment_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


