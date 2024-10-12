# Organizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**orgs** | [**List[Organization]**](Organization.md) |  | [optional] 

## Example

```python
from openapi_client.models.organizations import Organizations

# TODO update the JSON string below
json = "{}"
# create an instance of Organizations from a JSON string
organizations_instance = Organizations.from_json(json)
# print the JSON string representation of the object
print(Organizations.to_json())

# convert the object into a dict
organizations_dict = organizations_instance.to_dict()
# create an instance of Organizations from a dict
organizations_from_dict = Organizations.from_dict(organizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


