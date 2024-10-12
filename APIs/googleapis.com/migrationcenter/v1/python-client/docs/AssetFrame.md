# AssetFrame

Contains data reported from an inventory source on an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Generic asset attributes. | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs. | [optional] 
**machine_details** | [**MachineDetails**](MachineDetails.md) |  | [optional] 
**performance_samples** | [**List[PerformanceSample]**](PerformanceSample.md) | Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored. | [optional] 
**report_time** | **str** | The time the data was reported. | [optional] 
**trace_token** | **str** | Optional. Trace token is optionally provided to assist with debugging and traceability. | [optional] 

## Example

```python
from openapi_client.models.asset_frame import AssetFrame

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFrame from a JSON string
asset_frame_instance = AssetFrame.from_json(json)
# print the JSON string representation of the object
print(AssetFrame.to_json())

# convert the object into a dict
asset_frame_dict = asset_frame_instance.to_dict()
# create an instance of AssetFrame from a dict
asset_frame_from_dict = AssetFrame.from_dict(asset_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


