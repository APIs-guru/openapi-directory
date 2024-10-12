# CreateAccessKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | Name of creator current access key | [optional] 
**friendly_name** | **str** | Friendly name of the access key | [optional] 
**ttl** | **float** | Time to live of the access key | [optional] 

## Example

```python
from openapi_client.models.create_access_key_request import CreateAccessKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccessKeyRequest from a JSON string
create_access_key_request_instance = CreateAccessKeyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAccessKeyRequest.to_json())

# convert the object into a dict
create_access_key_request_dict = create_access_key_request_instance.to_dict()
# create an instance of CreateAccessKeyRequest from a dict
create_access_key_request_from_dict = CreateAccessKeyRequest.from_dict(create_access_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


