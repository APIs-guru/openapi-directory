# BucketCustomPlacementConfig

The bucket's custom placement configuration for Custom Dual Regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_locations** | **List[str]** | The list of regional locations in which data is placed. | [optional] 

## Example

```python
from openapi_client.models.bucket_custom_placement_config import BucketCustomPlacementConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BucketCustomPlacementConfig from a JSON string
bucket_custom_placement_config_instance = BucketCustomPlacementConfig.from_json(json)
# print the JSON string representation of the object
print(BucketCustomPlacementConfig.to_json())

# convert the object into a dict
bucket_custom_placement_config_dict = bucket_custom_placement_config_instance.to_dict()
# create an instance of BucketCustomPlacementConfig from a dict
bucket_custom_placement_config_from_dict = BucketCustomPlacementConfig.from_dict(bucket_custom_placement_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


