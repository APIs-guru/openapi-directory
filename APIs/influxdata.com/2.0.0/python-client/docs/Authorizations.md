# Authorizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[Authorization]**](Authorization.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.authorizations import Authorizations

# TODO update the JSON string below
json = "{}"
# create an instance of Authorizations from a JSON string
authorizations_instance = Authorizations.from_json(json)
# print the JSON string representation of the object
print(Authorizations.to_json())

# convert the object into a dict
authorizations_dict = authorizations_instance.to_dict()
# create an instance of Authorizations from a dict
authorizations_from_dict = Authorizations.from_dict(authorizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


