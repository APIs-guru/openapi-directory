# PolicyMetadata

Policy metadata resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the policy metadata. | [optional] [readonly] 
**name** | **str** | The name of the policy metadata. | [optional] [readonly] 
**properties** | [**PolicyMetadataProperties**](PolicyMetadataProperties.md) |  | [optional] 
**type** | **str** | The type of the policy metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_metadata import PolicyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyMetadata from a JSON string
policy_metadata_instance = PolicyMetadata.from_json(json)
# print the JSON string representation of the object
print(PolicyMetadata.to_json())

# convert the object into a dict
policy_metadata_dict = policy_metadata_instance.to_dict()
# create an instance of PolicyMetadata from a dict
policy_metadata_from_dict = PolicyMetadata.from_dict(policy_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


