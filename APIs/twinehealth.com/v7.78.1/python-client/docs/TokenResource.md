# TokenResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**TokenResourceAttributes**](TokenResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**TokenResourceRelationships**](TokenResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.token_resource import TokenResource

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResource from a JSON string
token_resource_instance = TokenResource.from_json(json)
# print the JSON string representation of the object
print(TokenResource.to_json())

# convert the object into a dict
token_resource_dict = token_resource_instance.to_dict()
# create an instance of TokenResource from a dict
token_resource_from_dict = TokenResource.from_dict(token_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


