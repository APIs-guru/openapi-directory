# Hotfixes

The list of hotfixes installed in the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Hotfix]**](Hotfix.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.hotfixes import Hotfixes

# TODO update the JSON string below
json = "{}"
# create an instance of Hotfixes from a JSON string
hotfixes_instance = Hotfixes.from_json(json)
# print the JSON string representation of the object
print(Hotfixes.to_json())

# convert the object into a dict
hotfixes_dict = hotfixes_instance.to_dict()
# create an instance of Hotfixes from a dict
hotfixes_from_dict = Hotfixes.from_dict(hotfixes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


