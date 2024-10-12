# UpdateScreenDetails

Details of a screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the screen. The name must be unique. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.update_screen_details import UpdateScreenDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateScreenDetails from a JSON string
update_screen_details_instance = UpdateScreenDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateScreenDetails.to_json())

# convert the object into a dict
update_screen_details_dict = update_screen_details_instance.to_dict()
# create an instance of UpdateScreenDetails from a dict
update_screen_details_from_dict = UpdateScreenDetails.from_dict(update_screen_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


