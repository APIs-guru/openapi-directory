# RegenerateServiceKeysRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **int** | Specification for which type of key to generate. | [optional] 
**key_value** | **str** | The value the key is set to. | [optional] 

## Example

```python
from openapi_client.models.regenerate_service_keys_request import RegenerateServiceKeysRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateServiceKeysRequest from a JSON string
regenerate_service_keys_request_instance = RegenerateServiceKeysRequest.from_json(json)
# print the JSON string representation of the object
print(RegenerateServiceKeysRequest.to_json())

# convert the object into a dict
regenerate_service_keys_request_dict = regenerate_service_keys_request_instance.to_dict()
# create an instance of RegenerateServiceKeysRequest from a dict
regenerate_service_keys_request_from_dict = RegenerateServiceKeysRequest.from_dict(regenerate_service_keys_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


