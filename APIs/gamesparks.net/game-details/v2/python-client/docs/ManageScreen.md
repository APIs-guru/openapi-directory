# ManageScreen


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**short_code** | **str** |  | [optional] 
**template** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.manage_screen import ManageScreen

# TODO update the JSON string below
json = "{}"
# create an instance of ManageScreen from a JSON string
manage_screen_instance = ManageScreen.from_json(json)
# print the JSON string representation of the object
print(ManageScreen.to_json())

# convert the object into a dict
manage_screen_dict = manage_screen_instance.to_dict()
# create an instance of ManageScreen from a dict
manage_screen_from_dict = ManageScreen.from_dict(manage_screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


