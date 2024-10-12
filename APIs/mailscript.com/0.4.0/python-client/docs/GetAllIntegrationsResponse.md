# GetAllIntegrationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllIntegrationsResponseListInner]**](GetAllIntegrationsResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_integrations_response import GetAllIntegrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllIntegrationsResponse from a JSON string
get_all_integrations_response_instance = GetAllIntegrationsResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllIntegrationsResponse.to_json())

# convert the object into a dict
get_all_integrations_response_dict = get_all_integrations_response_instance.to_dict()
# create an instance of GetAllIntegrationsResponse from a dict
get_all_integrations_response_from_dict = GetAllIntegrationsResponse.from_dict(get_all_integrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


