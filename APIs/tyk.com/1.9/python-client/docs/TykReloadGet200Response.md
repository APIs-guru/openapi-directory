# TykReloadGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_reload_get200_response import TykReloadGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykReloadGet200Response from a JSON string
tyk_reload_get200_response_instance = TykReloadGet200Response.from_json(json)
# print the JSON string representation of the object
print(TykReloadGet200Response.to_json())

# convert the object into a dict
tyk_reload_get200_response_dict = tyk_reload_get200_response_instance.to_dict()
# create an instance of TykReloadGet200Response from a dict
tyk_reload_get200_response_from_dict = TykReloadGet200Response.from_dict(tyk_reload_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


