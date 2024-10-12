# ApiKey

An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_entities** | **List[str]** | The group/service ids (prefixed by group_ or service_ on which the key is authorized | 
**client_id** | **str** | The unique id of the Api Key. Usually 16 random alpha numerical characters, but can be anything | 
**client_name** | **str** | The name of the api key, for humans ;-) | 
**client_secret** | **str** | The secret of the Api Key. Usually 64 random alpha numerical characters, but can be anything | 
**daily_quota** | **int** | Authorized number of calls per day | [optional] 
**enabled** | **bool** | Whether or not the key is enabled. If disabled, resources won&#39;t be available to calls using this key | 
**metadata** | **Dict[str, str]** | Bunch of metadata for the key | [optional] 
**monthly_quota** | **int** | Authorized number of calls per month | [optional] 
**throttling_quota** | **int** | Authorized number of calls per second, measured on 10 seconds | [optional] 

## Example

```python
from openapi_client.models.api_key import ApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKey from a JSON string
api_key_instance = ApiKey.from_json(json)
# print the JSON string representation of the object
print(ApiKey.to_json())

# convert the object into a dict
api_key_dict = api_key_instance.to_dict()
# create an instance of ApiKey from a dict
api_key_from_dict = ApiKey.from_dict(api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


