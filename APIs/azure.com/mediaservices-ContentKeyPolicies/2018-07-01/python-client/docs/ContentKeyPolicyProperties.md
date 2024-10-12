# ContentKeyPolicyProperties

The properties of the Content Key Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The creation date of the Policy | [optional] [readonly] 
**description** | **str** | A description for the Policy. | [optional] 
**last_modified** | **datetime** | The last modified date of the Policy | [optional] [readonly] 
**options** | [**List[ContentKeyPolicyOption]**](ContentKeyPolicyOption.md) | The Key Policy options. | 
**policy_id** | **str** | The legacy Policy ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_key_policy_properties import ContentKeyPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyProperties from a JSON string
content_key_policy_properties_instance = ContentKeyPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyProperties.to_json())

# convert the object into a dict
content_key_policy_properties_dict = content_key_policy_properties_instance.to_dict()
# create an instance of ContentKeyPolicyProperties from a dict
content_key_policy_properties_from_dict = ContentKeyPolicyProperties.from_dict(content_key_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


