# CustomMetadata

CustomMetadata contains information from a user-defined operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **Dict[str, str]** | Output only. Key-value pairs provided by the user-defined operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_metadata import CustomMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetadata from a JSON string
custom_metadata_instance = CustomMetadata.from_json(json)
# print the JSON string representation of the object
print(CustomMetadata.to_json())

# convert the object into a dict
custom_metadata_dict = custom_metadata_instance.to_dict()
# create an instance of CustomMetadata from a dict
custom_metadata_from_dict = CustomMetadata.from_dict(custom_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


