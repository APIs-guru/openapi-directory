# ContentKeyPolicyPlayReadyContentKeyLocation

Base class for content key ID location. A derived class must be used to represent the location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_content_key_location import ContentKeyPolicyPlayReadyContentKeyLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyContentKeyLocation from a JSON string
content_key_policy_play_ready_content_key_location_instance = ContentKeyPolicyPlayReadyContentKeyLocation.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyContentKeyLocation.to_json())

# convert the object into a dict
content_key_policy_play_ready_content_key_location_dict = content_key_policy_play_ready_content_key_location_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyContentKeyLocation from a dict
content_key_policy_play_ready_content_key_location_from_dict = ContentKeyPolicyPlayReadyContentKeyLocation.from_dict(content_key_policy_play_ready_content_key_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


