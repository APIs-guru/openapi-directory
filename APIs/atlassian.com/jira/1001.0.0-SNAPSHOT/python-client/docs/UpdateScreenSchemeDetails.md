# UpdateScreenSchemeDetails

Details of a screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the screen scheme. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the screen scheme. The name must be unique. The maximum length is 255 characters. | [optional] 
**screens** | [**UpdateScreenTypes**](UpdateScreenTypes.md) | The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted. | [optional] 

## Example

```python
from openapi_client.models.update_screen_scheme_details import UpdateScreenSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateScreenSchemeDetails from a JSON string
update_screen_scheme_details_instance = UpdateScreenSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateScreenSchemeDetails.to_json())

# convert the object into a dict
update_screen_scheme_details_dict = update_screen_scheme_details_instance.to_dict()
# create an instance of UpdateScreenSchemeDetails from a dict
update_screen_scheme_details_from_dict = UpdateScreenSchemeDetails.from_dict(update_screen_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


