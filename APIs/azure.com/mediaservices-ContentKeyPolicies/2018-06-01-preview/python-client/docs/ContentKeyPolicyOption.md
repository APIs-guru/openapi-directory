# ContentKeyPolicyOption

Represents a policy option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**ContentKeyPolicyConfiguration**](ContentKeyPolicyConfiguration.md) |  | 
**name** | **str** | The Policy Option description. | [optional] 
**policy_option_id** | **str** | The legacy Policy Option ID. | [optional] [readonly] 
**restriction** | [**ContentKeyPolicyRestriction**](ContentKeyPolicyRestriction.md) |  | 

## Example

```python
from openapi_client.models.content_key_policy_option import ContentKeyPolicyOption

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyOption from a JSON string
content_key_policy_option_instance = ContentKeyPolicyOption.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyOption.to_json())

# convert the object into a dict
content_key_policy_option_dict = content_key_policy_option_instance.to_dict()
# create an instance of ContentKeyPolicyOption from a dict
content_key_policy_option_from_dict = ContentKeyPolicyOption.from_dict(content_key_policy_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


