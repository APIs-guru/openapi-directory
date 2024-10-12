# PolicykeyResource

Namespace/NotificationHub Regenerate Keys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_key** | **str** | Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization Rule. The value can be Primary Key/Secondary Key. | [optional] 

## Example

```python
from openapi_client.models.policykey_resource import PolicykeyResource

# TODO update the JSON string below
json = "{}"
# create an instance of PolicykeyResource from a JSON string
policykey_resource_instance = PolicykeyResource.from_json(json)
# print the JSON string representation of the object
print(PolicykeyResource.to_json())

# convert the object into a dict
policykey_resource_dict = policykey_resource_instance.to_dict()
# create an instance of PolicykeyResource from a dict
policykey_resource_from_dict = PolicykeyResource.from_dict(policykey_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


