# SetInstancewideDestinationOauthParamsRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**params** | **Dict[str, object]** |  | 

## Example

```python
from openapi_client.models.set_instancewide_destination_oauth_params_request_body import SetInstancewideDestinationOauthParamsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SetInstancewideDestinationOauthParamsRequestBody from a JSON string
set_instancewide_destination_oauth_params_request_body_instance = SetInstancewideDestinationOauthParamsRequestBody.from_json(json)
# print the JSON string representation of the object
print(SetInstancewideDestinationOauthParamsRequestBody.to_json())

# convert the object into a dict
set_instancewide_destination_oauth_params_request_body_dict = set_instancewide_destination_oauth_params_request_body_instance.to_dict()
# create an instance of SetInstancewideDestinationOauthParamsRequestBody from a dict
set_instancewide_destination_oauth_params_request_body_from_dict = SetInstancewideDestinationOauthParamsRequestBody.from_dict(set_instancewide_destination_oauth_params_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


