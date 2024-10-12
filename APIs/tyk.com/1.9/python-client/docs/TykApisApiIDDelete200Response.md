# TykApisApiIDDelete200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_apis_api_id_delete200_response import TykApisApiIDDelete200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykApisApiIDDelete200Response from a JSON string
tyk_apis_api_id_delete200_response_instance = TykApisApiIDDelete200Response.from_json(json)
# print the JSON string representation of the object
print(TykApisApiIDDelete200Response.to_json())

# convert the object into a dict
tyk_apis_api_id_delete200_response_dict = tyk_apis_api_id_delete200_response_instance.to_dict()
# create an instance of TykApisApiIDDelete200Response from a dict
tyk_apis_api_id_delete200_response_from_dict = TykApisApiIDDelete200Response.from_dict(tyk_apis_api_id_delete200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


