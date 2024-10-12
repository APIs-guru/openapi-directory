# ListScreenshotClustersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[ScreenshotCluster]**](ScreenshotCluster.md) | The set of clusters associated with an execution Always set | [optional] 

## Example

```python
from openapi_client.models.list_screenshot_clusters_response import ListScreenshotClustersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScreenshotClustersResponse from a JSON string
list_screenshot_clusters_response_instance = ListScreenshotClustersResponse.from_json(json)
# print the JSON string representation of the object
print(ListScreenshotClustersResponse.to_json())

# convert the object into a dict
list_screenshot_clusters_response_dict = list_screenshot_clusters_response_instance.to_dict()
# create an instance of ListScreenshotClustersResponse from a dict
list_screenshot_clusters_response_from_dict = ListScreenshotClustersResponse.from_dict(list_screenshot_clusters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


