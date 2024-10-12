# FreeInstanceMetadata

Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_behavior** | **str** | Specifies the expiration behavior of a free instance. The default of ExpireBehavior is &#x60;REMOVE_AFTER_GRACE_PERIOD&#x60;. This can be modified during or after creation, and before expiration. | [optional] 
**expire_time** | **str** | Output only. Timestamp after which the instance will either be upgraded or scheduled for deletion after a grace period. ExpireBehavior is used to choose between upgrading or scheduling the free instance for deletion. This timestamp is set during the creation of a free instance. | [optional] [readonly] 
**upgrade_time** | **str** | Output only. If present, the timestamp at which the free instance was upgraded to a provisioned instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.free_instance_metadata import FreeInstanceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FreeInstanceMetadata from a JSON string
free_instance_metadata_instance = FreeInstanceMetadata.from_json(json)
# print the JSON string representation of the object
print(FreeInstanceMetadata.to_json())

# convert the object into a dict
free_instance_metadata_dict = free_instance_metadata_instance.to_dict()
# create an instance of FreeInstanceMetadata from a dict
free_instance_metadata_from_dict = FreeInstanceMetadata.from_dict(free_instance_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


