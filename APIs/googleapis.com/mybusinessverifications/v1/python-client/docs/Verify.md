# Verify

Indicates that the location requires verification. Contains information about the current verification actions performed on the location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_pending_verification** | **bool** | Indicates whether a verification process has already started, and can be completed by the location. | [optional] 

## Example

```python
from openapi_client.models.verify import Verify

# TODO update the JSON string below
json = "{}"
# create an instance of Verify from a JSON string
verify_instance = Verify.from_json(json)
# print the JSON string representation of the object
print(Verify.to_json())

# convert the object into a dict
verify_dict = verify_instance.to_dict()
# create an instance of Verify from a dict
verify_from_dict = Verify.from_dict(verify_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


