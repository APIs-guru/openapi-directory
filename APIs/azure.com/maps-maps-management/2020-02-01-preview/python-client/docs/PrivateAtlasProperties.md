# PrivateAtlasProperties

Private Atlas resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled | [optional] 

## Example

```python
from openapi_client.models.private_atlas_properties import PrivateAtlasProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAtlasProperties from a JSON string
private_atlas_properties_instance = PrivateAtlasProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateAtlasProperties.to_json())

# convert the object into a dict
private_atlas_properties_dict = private_atlas_properties_instance.to_dict()
# create an instance of PrivateAtlasProperties from a dict
private_atlas_properties_from_dict = PrivateAtlasProperties.from_dict(private_atlas_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


