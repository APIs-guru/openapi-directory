# RevocationContext

Revocation context of the purchases.subscriptionsv2.revoke API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prorated_refund** | **object** | Used to determine if the refund type in the RevocationContext is a prorated refund. | [optional] 

## Example

```python
from openapi_client.models.revocation_context import RevocationContext

# TODO update the JSON string below
json = "{}"
# create an instance of RevocationContext from a JSON string
revocation_context_instance = RevocationContext.from_json(json)
# print the JSON string representation of the object
print(RevocationContext.to_json())

# convert the object into a dict
revocation_context_dict = revocation_context_instance.to_dict()
# create an instance of RevocationContext from a dict
revocation_context_from_dict = RevocationContext.from_dict(revocation_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


