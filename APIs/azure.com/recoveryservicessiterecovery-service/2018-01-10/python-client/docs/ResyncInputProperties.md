# ResyncInputProperties

Resync input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**ResyncProviderSpecificInput**](ResyncProviderSpecificInput.md) |  | 

## Example

```python
from openapi_client.models.resync_input_properties import ResyncInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResyncInputProperties from a JSON string
resync_input_properties_instance = ResyncInputProperties.from_json(json)
# print the JSON string representation of the object
print(ResyncInputProperties.to_json())

# convert the object into a dict
resync_input_properties_dict = resync_input_properties_instance.to_dict()
# create an instance of ResyncInputProperties from a dict
resync_input_properties_from_dict = ResyncInputProperties.from_dict(resync_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


