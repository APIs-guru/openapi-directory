# SourceProperties

The properties of the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The branch name of the source code. | [optional] 
**repository_url** | **str** | The full URL to the source code repository | 
**source_control_auth_properties** | [**AuthInfo**](AuthInfo.md) |  | [optional] 
**source_control_type** | **str** | The type of source control service. | 

## Example

```python
from openapi_client.models.source_properties import SourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceProperties from a JSON string
source_properties_instance = SourceProperties.from_json(json)
# print the JSON string representation of the object
print(SourceProperties.to_json())

# convert the object into a dict
source_properties_dict = source_properties_instance.to_dict()
# create an instance of SourceProperties from a dict
source_properties_from_dict = SourceProperties.from_dict(source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


