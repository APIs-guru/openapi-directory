# ScreenshotCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | **str** | A string that describes the activity of every screen in the cluster. | [optional] 
**cluster_id** | **str** | A unique identifier for the cluster. @OutputOnly | [optional] 
**key_screen** | [**Screen**](Screen.md) |  | [optional] 
**screens** | [**List[Screen]**](Screen.md) | Full list of screens. | [optional] 

## Example

```python
from openapi_client.models.screenshot_cluster import ScreenshotCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenshotCluster from a JSON string
screenshot_cluster_instance = ScreenshotCluster.from_json(json)
# print the JSON string representation of the object
print(ScreenshotCluster.to_json())

# convert the object into a dict
screenshot_cluster_dict = screenshot_cluster_instance.to_dict()
# create an instance of ScreenshotCluster from a dict
screenshot_cluster_from_dict = ScreenshotCluster.from_dict(screenshot_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


