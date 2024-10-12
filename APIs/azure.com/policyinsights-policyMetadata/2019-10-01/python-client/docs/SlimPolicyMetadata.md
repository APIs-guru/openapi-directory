# SlimPolicyMetadata

Slim version of policy metadata resource definition, excluding properties with large strings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the policy metadata. | [optional] [readonly] 
**name** | **str** | The name of the policy metadata. | [optional] [readonly] 
**properties** | [**PolicyMetadataSlimProperties**](PolicyMetadataSlimProperties.md) |  | [optional] 
**type** | **str** | The type of the policy metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.slim_policy_metadata import SlimPolicyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SlimPolicyMetadata from a JSON string
slim_policy_metadata_instance = SlimPolicyMetadata.from_json(json)
# print the JSON string representation of the object
print(SlimPolicyMetadata.to_json())

# convert the object into a dict
slim_policy_metadata_dict = slim_policy_metadata_instance.to_dict()
# create an instance of SlimPolicyMetadata from a dict
slim_policy_metadata_from_dict = SlimPolicyMetadata.from_dict(slim_policy_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


