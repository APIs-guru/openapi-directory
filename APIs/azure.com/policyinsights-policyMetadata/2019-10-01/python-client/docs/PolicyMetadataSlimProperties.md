# PolicyMetadataSlimProperties

The properties of the policy metadata, excluding properties containing large strings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_content_url** | **str** | Url for getting additional content about the resource metadata. | [optional] [readonly] 
**category** | **str** | The category of the policy metadata. | [optional] [readonly] 
**metadata** | **object** | Additional metadata. | [optional] [readonly] 
**metadata_id** | **str** | The policy metadata identifier. | [optional] [readonly] 
**owner** | **str** | The owner of the policy metadata. | [optional] [readonly] 
**title** | **str** | The title of the policy metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_metadata_slim_properties import PolicyMetadataSlimProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyMetadataSlimProperties from a JSON string
policy_metadata_slim_properties_instance = PolicyMetadataSlimProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyMetadataSlimProperties.to_json())

# convert the object into a dict
policy_metadata_slim_properties_dict = policy_metadata_slim_properties_instance.to_dict()
# create an instance of PolicyMetadataSlimProperties from a dict
policy_metadata_slim_properties_from_dict = PolicyMetadataSlimProperties.from_dict(policy_metadata_slim_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


