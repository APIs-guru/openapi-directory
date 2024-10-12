# ServiceAccountKeysListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account_key** | [**List[ServiceAccountKey]**](ServiceAccountKey.md) | The service account credentials. | [optional] 

## Example

```python
from openapi_client.models.service_account_keys_list_response import ServiceAccountKeysListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccountKeysListResponse from a JSON string
service_account_keys_list_response_instance = ServiceAccountKeysListResponse.from_json(json)
# print the JSON string representation of the object
print(ServiceAccountKeysListResponse.to_json())

# convert the object into a dict
service_account_keys_list_response_dict = service_account_keys_list_response_instance.to_dict()
# create an instance of ServiceAccountKeysListResponse from a dict
service_account_keys_list_response_from_dict = ServiceAccountKeysListResponse.from_dict(service_account_keys_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


