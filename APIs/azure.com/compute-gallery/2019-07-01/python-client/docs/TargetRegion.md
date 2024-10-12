# TargetRegion

Describes the target region information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the region. | 
**regional_replica_count** | **int** | The number of replicas of the Image Version to be created per region. This property is updatable. | [optional] 
**storage_account_type** | **str** | Specifies the storage account type to be used to store the image. This property is not updatable. | [optional] 

## Example

```python
from openapi_client.models.target_region import TargetRegion

# TODO update the JSON string below
json = "{}"
# create an instance of TargetRegion from a JSON string
target_region_instance = TargetRegion.from_json(json)
# print the JSON string representation of the object
print(TargetRegion.to_json())

# convert the object into a dict
target_region_dict = target_region_instance.to_dict()
# create an instance of TargetRegion from a dict
target_region_from_dict = TargetRegion.from_dict(target_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


