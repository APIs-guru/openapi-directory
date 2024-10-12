# View

The view in Customer 360 web application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed** | **datetime** | Date time when view was last modified. | [optional] [readonly] 
**created** | **datetime** | Date time when view was created. | [optional] [readonly] 
**definition** | **str** | View definition. | 
**display_name** | **Dict[str, str]** | Localized display name for the view. | [optional] 
**tenant_id** | **str** | the hub name. | [optional] [readonly] 
**user_id** | **str** | the user ID. | [optional] 
**view_name** | **str** | Name of the view. | [optional] [readonly] 

## Example

```python
from openapi_client.models.view import View

# TODO update the JSON string below
json = "{}"
# create an instance of View from a JSON string
view_instance = View.from_json(json)
# print the JSON string representation of the object
print(View.to_json())

# convert the object into a dict
view_dict = view_instance.to_dict()
# create an instance of View from a dict
view_from_dict = View.from_dict(view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


