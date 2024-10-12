# View

States and configurations of Cost Analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ViewProperties**](ViewProperties.md) |  | [optional] 
**e_tag** | **str** | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


