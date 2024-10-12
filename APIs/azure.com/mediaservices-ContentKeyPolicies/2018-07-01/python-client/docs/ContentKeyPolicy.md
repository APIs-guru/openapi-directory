# ContentKeyPolicy

A Content Key Policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ContentKeyPolicyProperties**](ContentKeyPolicyProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_key_policy import ContentKeyPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicy from a JSON string
content_key_policy_instance = ContentKeyPolicy.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicy.to_json())

# convert the object into a dict
content_key_policy_dict = content_key_policy_instance.to_dict()
# create an instance of ContentKeyPolicy from a dict
content_key_policy_from_dict = ContentKeyPolicy.from_dict(content_key_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


