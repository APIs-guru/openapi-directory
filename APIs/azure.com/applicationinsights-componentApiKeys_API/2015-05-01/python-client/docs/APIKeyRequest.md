# APIKeyRequest

An Application Insights component API Key creation request definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_read_properties** | **List[str]** | The read access rights of this API Key. | [optional] 
**linked_write_properties** | **List[str]** | The write access rights of this API Key. | [optional] 
**name** | **str** | The name of the API Key. | [optional] 

## Example

```python
from openapi_client.models.api_key_request import APIKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of APIKeyRequest from a JSON string
api_key_request_instance = APIKeyRequest.from_json(json)
# print the JSON string representation of the object
print(APIKeyRequest.to_json())

# convert the object into a dict
api_key_request_dict = api_key_request_instance.to_dict()
# create an instance of APIKeyRequest from a dict
api_key_request_from_dict = APIKeyRequest.from_dict(api_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


