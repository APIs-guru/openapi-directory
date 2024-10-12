# GetEcosystemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Ecosystem**](Ecosystem.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_ecosystem_response import GetEcosystemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetEcosystemResponse from a JSON string
get_ecosystem_response_instance = GetEcosystemResponse.from_json(json)
# print the JSON string representation of the object
print(GetEcosystemResponse.to_json())

# convert the object into a dict
get_ecosystem_response_dict = get_ecosystem_response_instance.to_dict()
# create an instance of GetEcosystemResponse from a dict
get_ecosystem_response_from_dict = GetEcosystemResponse.from_dict(get_ecosystem_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


