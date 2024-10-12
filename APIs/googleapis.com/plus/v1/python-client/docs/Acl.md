# Acl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the access granted, suitable for display. | [optional] 
**items** | [**List[PlusAclentryResource]**](PlusAclentryResource.md) | The list of access entries. | [optional] 
**kind** | **str** | Identifies this resource as a collection of access controls. Value: \&quot;plus#acl\&quot;. | [optional] [default to 'plus#acl']

## Example

```python
from openapi_client.models.acl import Acl

# TODO update the JSON string below
json = "{}"
# create an instance of Acl from a JSON string
acl_instance = Acl.from_json(json)
# print the JSON string representation of the object
print(Acl.to_json())

# convert the object into a dict
acl_dict = acl_instance.to_dict()
# create an instance of Acl from a dict
acl_from_dict = Acl.from_dict(acl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


