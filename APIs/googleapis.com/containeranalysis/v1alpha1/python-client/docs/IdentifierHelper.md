# IdentifierHelper

Helps in identifying the underlying product. This should be treated like a one-of field. Only one field should be set in this proto. This is a workaround because spanner indexes on one-of fields restrict addition and deletion of fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | The field that is set in the API proto. | [optional] 
**generic_uri** | **str** | Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. | [optional] 

## Example

```python
from openapi_client.models.identifier_helper import IdentifierHelper

# TODO update the JSON string below
json = "{}"
# create an instance of IdentifierHelper from a JSON string
identifier_helper_instance = IdentifierHelper.from_json(json)
# print the JSON string representation of the object
print(IdentifierHelper.to_json())

# convert the object into a dict
identifier_helper_dict = identifier_helper_instance.to_dict()
# create an instance of IdentifierHelper from a dict
identifier_helper_from_dict = IdentifierHelper.from_dict(identifier_helper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


