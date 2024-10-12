# RuntimeMetadata

RuntimeMetadata describing a runtime environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[ParameterMetadata]**](ParameterMetadata.md) | The parameters for the template. | [optional] 
**sdk_info** | [**SDKInfo**](SDKInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.runtime_metadata import RuntimeMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeMetadata from a JSON string
runtime_metadata_instance = RuntimeMetadata.from_json(json)
# print the JSON string representation of the object
print(RuntimeMetadata.to_json())

# convert the object into a dict
runtime_metadata_dict = runtime_metadata_instance.to_dict()
# create an instance of RuntimeMetadata from a dict
runtime_metadata_from_dict = RuntimeMetadata.from_dict(runtime_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


