# Asset

An asset represents a resource in your environment. Asset types include virtual machines and databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_groups** | **List[str]** | Output only. The list of groups that the asset is assigned to. | [optional] [readonly] 
**attributes** | **Dict[str, str]** | Generic asset attributes. | [optional] 
**create_time** | **str** | Output only. The timestamp when the asset was created. | [optional] [readonly] 
**insight_list** | [**InsightList**](InsightList.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs. | [optional] 
**machine_details** | [**MachineDetails**](MachineDetails.md) |  | [optional] 
**name** | **str** | Output only. The full name of the asset. | [optional] [readonly] 
**performance_data** | [**AssetPerformanceData**](AssetPerformanceData.md) |  | [optional] 
**sources** | **List[str]** | Output only. The list of sources contributing to the asset. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the asset was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.asset import Asset

# TODO update the JSON string below
json = "{}"
# create an instance of Asset from a JSON string
asset_instance = Asset.from_json(json)
# print the JSON string representation of the object
print(Asset.to_json())

# convert the object into a dict
asset_dict = asset_instance.to_dict()
# create an instance of Asset from a dict
asset_from_dict = Asset.from_dict(asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


