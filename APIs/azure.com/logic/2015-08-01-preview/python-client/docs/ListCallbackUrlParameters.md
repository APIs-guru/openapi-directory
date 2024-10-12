# ListCallbackUrlParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_after** | **datetime** | The expiry time. | [optional] 

## Example

```python
from openapi_client.models.list_callback_url_parameters import ListCallbackUrlParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ListCallbackUrlParameters from a JSON string
list_callback_url_parameters_instance = ListCallbackUrlParameters.from_json(json)
# print the JSON string representation of the object
print(ListCallbackUrlParameters.to_json())

# convert the object into a dict
list_callback_url_parameters_dict = list_callback_url_parameters_instance.to_dict()
# create an instance of ListCallbackUrlParameters from a dict
list_callback_url_parameters_from_dict = ListCallbackUrlParameters.from_dict(list_callback_url_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


