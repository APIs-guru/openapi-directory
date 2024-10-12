# TokenResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | 
**expires_in** | **int** |  | 
**refresh_token** | **str** |  | 
**token_type** | **str** |  | 

## Example

```python
from openapi_client.models.token_resource_attributes import TokenResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResourceAttributes from a JSON string
token_resource_attributes_instance = TokenResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(TokenResourceAttributes.to_json())

# convert the object into a dict
token_resource_attributes_dict = token_resource_attributes_instance.to_dict()
# create an instance of TokenResourceAttributes from a dict
token_resource_attributes_from_dict = TokenResourceAttributes.from_dict(token_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


