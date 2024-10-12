# ServiceKeys

The response body for a ListKeys API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_auth_endpoint** | **str** | The primary authorization endpoint. | [optional] 
**primary_key** | **str** | The primary key for the Media Service resource. | [optional] 
**scope** | **str** | The authorization scope. | [optional] 
**secondary_auth_endpoint** | **str** | The secondary authorization endpoint. | [optional] 
**secondary_key** | **str** | The secondary key for the Media Service resource. | [optional] 

## Example

```python
from openapi_client.models.service_keys import ServiceKeys

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceKeys from a JSON string
service_keys_instance = ServiceKeys.from_json(json)
# print the JSON string representation of the object
print(ServiceKeys.to_json())

# convert the object into a dict
service_keys_dict = service_keys_instance.to_dict()
# create an instance of ServiceKeys from a dict
service_keys_from_dict = ServiceKeys.from_dict(service_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


