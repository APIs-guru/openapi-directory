# GetUpdatesPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**List[Update]**](Update.md) |  | 

## Example

```python
from openapi_client.models.get_updates_post200_response import GetUpdatesPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUpdatesPost200Response from a JSON string
get_updates_post200_response_instance = GetUpdatesPost200Response.from_json(json)
# print the JSON string representation of the object
print(GetUpdatesPost200Response.to_json())

# convert the object into a dict
get_updates_post200_response_dict = get_updates_post200_response_instance.to_dict()
# create an instance of GetUpdatesPost200Response from a dict
get_updates_post200_response_from_dict = GetUpdatesPost200Response.from_dict(get_updates_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


