# EndpointKeysDTO

Schema for EndpointKeys generate/refresh operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installed_version** | **str** | Current version of runtime. | [optional] 
**language** | **str** | Language setting of runtime. | [optional] 
**last_stable_version** | **str** | Latest version of runtime. | [optional] 
**primary_endpoint_key** | **str** | Primary Access Key. | [optional] 
**secondary_endpoint_key** | **str** | Secondary Access Key. | [optional] 

## Example

```python
from openapi_client.models.endpoint_keys_dto import EndpointKeysDTO

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointKeysDTO from a JSON string
endpoint_keys_dto_instance = EndpointKeysDTO.from_json(json)
# print the JSON string representation of the object
print(EndpointKeysDTO.to_json())

# convert the object into a dict
endpoint_keys_dto_dict = endpoint_keys_dto_instance.to_dict()
# create an instance of EndpointKeysDTO from a dict
endpoint_keys_dto_from_dict = EndpointKeysDTO.from_dict(endpoint_keys_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


