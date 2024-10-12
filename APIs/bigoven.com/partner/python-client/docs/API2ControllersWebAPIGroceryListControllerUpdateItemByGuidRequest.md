# API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**department** | **str** | Gets or sets the department. | [optional] 
**guid** | **str** | Gets or sets the unique identifier. | [optional] 
**ischecked** | **bool** | Gets or sets the ischecked. | [optional] 
**name** | **str** | Gets or sets the name. | [optional] 
**notes** | **str** | Gets or sets the notes. | [optional] 
**quantity** | **str** | Gets or sets the quantity. | [optional] 
**unit** | **str** | Gets or sets the unit. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request import API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest from a JSON string
api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request_instance = API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest.to_json())

# convert the object into a dict
api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request_dict = api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request_instance.to_dict()
# create an instance of API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest from a dict
api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request_from_dict = API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest.from_dict(api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


