# TokenUpdateProperties

The parameters for updating token properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**TokenCredentialsProperties**](TokenCredentialsProperties.md) |  | [optional] 
**scope_map_id** | **str** | The resource ID of the scope map to which the token will be associated with. | [optional] 
**status** | **str** | The status of the token example enabled or disabled. | [optional] 

## Example

```python
from openapi_client.models.token_update_properties import TokenUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateProperties from a JSON string
token_update_properties_instance = TokenUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateProperties.to_json())

# convert the object into a dict
token_update_properties_dict = token_update_properties_instance.to_dict()
# create an instance of TokenUpdateProperties from a dict
token_update_properties_from_dict = TokenUpdateProperties.from_dict(token_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


