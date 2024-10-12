# IdentityItemDescription

Describes a single user-assigned identity associated with the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | the client identifier of the Service Principal which this identity represents. | [optional] 
**principal_id** | **str** | the object identifier of the Service Principal which this identity represents. | [optional] 

## Example

```python
from openapi_client.models.identity_item_description import IdentityItemDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityItemDescription from a JSON string
identity_item_description_instance = IdentityItemDescription.from_json(json)
# print the JSON string representation of the object
print(IdentityItemDescription.to_json())

# convert the object into a dict
identity_item_description_dict = identity_item_description_instance.to_dict()
# create an instance of IdentityItemDescription from a dict
identity_item_description_from_dict = IdentityItemDescription.from_dict(identity_item_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


