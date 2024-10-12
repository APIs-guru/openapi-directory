# FailoverSet

The failover set on a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibility_result** | [**FailoverSetEligibilityResult**](FailoverSetEligibilityResult.md) |  | [optional] 
**volume_containers** | [**List[VolumeContainerFailoverMetadata]**](VolumeContainerFailoverMetadata.md) | The list of meta data of volume containers, which are part of the failover set. | [optional] 

## Example

```python
from openapi_client.models.failover_set import FailoverSet

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverSet from a JSON string
failover_set_instance = FailoverSet.from_json(json)
# print the JSON string representation of the object
print(FailoverSet.to_json())

# convert the object into a dict
failover_set_dict = failover_set_instance.to_dict()
# create an instance of FailoverSet from a dict
failover_set_from_dict = FailoverSet.from_dict(failover_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


