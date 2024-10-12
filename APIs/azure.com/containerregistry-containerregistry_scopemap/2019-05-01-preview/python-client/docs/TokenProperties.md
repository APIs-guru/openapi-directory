# TokenProperties

The properties of a token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of scope map. | [optional] [readonly] 
**credentials** | [**TokenCredentialsProperties**](TokenCredentialsProperties.md) |  | [optional] 
**object_id** | **str** | The user/group/application object ID for which the token has to be created. | [optional] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] [readonly] 
**scope_map_id** | **str** | The resource ID of the scope map to which the token will be associated with. | [optional] 
**status** | **str** | The status of the token example enabled or disabled. | [optional] 

## Example

```python
from openapi_client.models.token_properties import TokenProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TokenProperties from a JSON string
token_properties_instance = TokenProperties.from_json(json)
# print the JSON string representation of the object
print(TokenProperties.to_json())

# convert the object into a dict
token_properties_dict = token_properties_instance.to_dict()
# create an instance of TokenProperties from a dict
token_properties_from_dict = TokenProperties.from_dict(token_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


