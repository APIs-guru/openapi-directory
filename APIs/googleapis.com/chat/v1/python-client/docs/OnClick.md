# OnClick

An `onclick` action (for example, open a link).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**FormAction**](FormAction.md) |  | [optional] 
**open_link** | [**OpenLink**](OpenLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.on_click import OnClick

# TODO update the JSON string below
json = "{}"
# create an instance of OnClick from a JSON string
on_click_instance = OnClick.from_json(json)
# print the JSON string representation of the object
print(OnClick.to_json())

# convert the object into a dict
on_click_dict = on_click_instance.to_dict()
# create an instance of OnClick from a dict
on_click_from_dict = OnClick.from_dict(on_click_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


