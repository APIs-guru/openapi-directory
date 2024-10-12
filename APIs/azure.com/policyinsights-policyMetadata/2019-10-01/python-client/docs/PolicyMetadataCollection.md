# PolicyMetadataCollection

Collection of policy metadata resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[SlimPolicyMetadata]**](SlimPolicyMetadata.md) | Array of policy metadata definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_metadata_collection import PolicyMetadataCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyMetadataCollection from a JSON string
policy_metadata_collection_instance = PolicyMetadataCollection.from_json(json)
# print the JSON string representation of the object
print(PolicyMetadataCollection.to_json())

# convert the object into a dict
policy_metadata_collection_dict = policy_metadata_collection_instance.to_dict()
# create an instance of PolicyMetadataCollection from a dict
policy_metadata_collection_from_dict = PolicyMetadataCollection.from_dict(policy_metadata_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


