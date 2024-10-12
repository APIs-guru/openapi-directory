# CreateNetworkFloorPlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_left_corner** | [**CreateNetworkFloorPlanRequestBottomLeftCorner**](CreateNetworkFloorPlanRequestBottomLeftCorner.md) |  | [optional] 
**bottom_right_corner** | [**CreateNetworkFloorPlanRequestBottomRightCorner**](CreateNetworkFloorPlanRequestBottomRightCorner.md) |  | [optional] 
**center** | [**CreateNetworkFloorPlanRequestCenter**](CreateNetworkFloorPlanRequestCenter.md) |  | [optional] 
**image_contents** | **bytearray** | The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. | 
**name** | **str** | The name of your floor plan. | 
**top_left_corner** | [**CreateNetworkFloorPlanRequestTopLeftCorner**](CreateNetworkFloorPlanRequestTopLeftCorner.md) |  | [optional] 
**top_right_corner** | [**CreateNetworkFloorPlanRequestTopRightCorner**](CreateNetworkFloorPlanRequestTopRightCorner.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_floor_plan_request import CreateNetworkFloorPlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFloorPlanRequest from a JSON string
create_network_floor_plan_request_instance = CreateNetworkFloorPlanRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFloorPlanRequest.to_json())

# convert the object into a dict
create_network_floor_plan_request_dict = create_network_floor_plan_request_instance.to_dict()
# create an instance of CreateNetworkFloorPlanRequest from a dict
create_network_floor_plan_request_from_dict = CreateNetworkFloorPlanRequest.from_dict(create_network_floor_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


