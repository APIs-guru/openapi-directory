# AccessRestrictions

Access related restrictions on the workforce pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_services** | [**List[ServiceConfig]**](ServiceConfig.md) | Optional. Immutable. Services allowed for web sign-in with the workforce pool. If not set by default there are no restrictions. | [optional] 
**disable_programmatic_signin** | **bool** | Optional. Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API] (https://cloud.google.com/iam/docs/reference/sts/rest). | [optional] 

## Example

```python
from openapi_client.models.access_restrictions import AccessRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of AccessRestrictions from a JSON string
access_restrictions_instance = AccessRestrictions.from_json(json)
# print the JSON string representation of the object
print(AccessRestrictions.to_json())

# convert the object into a dict
access_restrictions_dict = access_restrictions_instance.to_dict()
# create an instance of AccessRestrictions from a dict
access_restrictions_from_dict = AccessRestrictions.from_dict(access_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


