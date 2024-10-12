# UpdateNetworkFloorPlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_left_corner** | [**CreateNetworkFloorPlanRequestBottomLeftCorner**](CreateNetworkFloorPlanRequestBottomLeftCorner.md) |  | [optional] 
**bottom_right_corner** | [**CreateNetworkFloorPlanRequestBottomRightCorner**](CreateNetworkFloorPlanRequestBottomRightCorner.md) |  | [optional] 
**center** | [**UpdateNetworkFloorPlanRequestCenter**](UpdateNetworkFloorPlanRequestCenter.md) |  | [optional] 
**image_contents** | **bytearray** | The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields (&#39;center, &#39;topLeftCorner&#39;, etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image. | [optional] 
**name** | **str** | The name of your floor plan. | [optional] 
**top_left_corner** | [**CreateNetworkFloorPlanRequestTopLeftCorner**](CreateNetworkFloorPlanRequestTopLeftCorner.md) |  | [optional] 
**top_right_corner** | [**CreateNetworkFloorPlanRequestTopRightCorner**](CreateNetworkFloorPlanRequestTopRightCorner.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_floor_plan_request import UpdateNetworkFloorPlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFloorPlanRequest from a JSON string
update_network_floor_plan_request_instance = UpdateNetworkFloorPlanRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFloorPlanRequest.to_json())

# convert the object into a dict
update_network_floor_plan_request_dict = update_network_floor_plan_request_instance.to_dict()
# create an instance of UpdateNetworkFloorPlanRequest from a dict
update_network_floor_plan_request_from_dict = UpdateNetworkFloorPlanRequest.from_dict(update_network_floor_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


