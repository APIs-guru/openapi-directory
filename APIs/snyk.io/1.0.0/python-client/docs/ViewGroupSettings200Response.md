# ViewGroupSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_access** | [**ViewGroupSettings200ResponseRequestAccess**](ViewGroupSettings200ResponseRequestAccess.md) |  | [optional] 
**session_length** | **float** | The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days. | [optional] 

## Example

```python
from openapi_client.models.view_group_settings200_response import ViewGroupSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ViewGroupSettings200Response from a JSON string
view_group_settings200_response_instance = ViewGroupSettings200Response.from_json(json)
# print the JSON string representation of the object
print(ViewGroupSettings200Response.to_json())

# convert the object into a dict
view_group_settings200_response_dict = view_group_settings200_response_instance.to_dict()
# create an instance of ViewGroupSettings200Response from a dict
view_group_settings200_response_from_dict = ViewGroupSettings200Response.from_dict(view_group_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


