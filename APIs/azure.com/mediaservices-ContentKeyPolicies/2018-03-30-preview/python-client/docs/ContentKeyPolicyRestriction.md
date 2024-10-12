# ContentKeyPolicyRestriction

Base class for Content Key Policy restrictions. A derived class must be used to create a restriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.content_key_policy_restriction import ContentKeyPolicyRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyRestriction from a JSON string
content_key_policy_restriction_instance = ContentKeyPolicyRestriction.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyRestriction.to_json())

# convert the object into a dict
content_key_policy_restriction_dict = content_key_policy_restriction_instance.to_dict()
# create an instance of ContentKeyPolicyRestriction from a dict
content_key_policy_restriction_from_dict = ContentKeyPolicyRestriction.from_dict(content_key_policy_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


