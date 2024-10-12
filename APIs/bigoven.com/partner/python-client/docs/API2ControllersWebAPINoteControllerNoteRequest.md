# API2ControllersWebAPINoteControllerNoteRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | Gets or sets the creation date. | [optional] 
**var_date** | **datetime** | Gets or sets the date. | [optional] 
**date_dt** | **str** | Gets or sets the date dt. | [optional] 
**guid** | **str** | Gets or sets the unique identifier. | [optional] 
**id** | **int** | Gets or sets the identifier. | [optional] 
**notes** | **str** | Gets or sets the notes. | [optional] 
**people** | **str** | Gets or sets the people. | [optional] 
**recipe_id** | **int** | Gets or sets the recipe identifier. | [optional] 
**user_id** | **int** | Gets or sets the user identifier. | [optional] 
**variations** | **str** | Gets or sets the variations. | [optional] 

## Example

```python
from openapi_client.models.api2_controllers_web_api_note_controller_note_request import API2ControllersWebAPINoteControllerNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of API2ControllersWebAPINoteControllerNoteRequest from a JSON string
api2_controllers_web_api_note_controller_note_request_instance = API2ControllersWebAPINoteControllerNoteRequest.from_json(json)
# print the JSON string representation of the object
print(API2ControllersWebAPINoteControllerNoteRequest.to_json())

# convert the object into a dict
api2_controllers_web_api_note_controller_note_request_dict = api2_controllers_web_api_note_controller_note_request_instance.to_dict()
# create an instance of API2ControllersWebAPINoteControllerNoteRequest from a dict
api2_controllers_web_api_note_controller_note_request_from_dict = API2ControllersWebAPINoteControllerNoteRequest.from_dict(api2_controllers_web_api_note_controller_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


