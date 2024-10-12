# ApiReleaseContractProperties

API Release details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | Identifier of the API the release belongs to. | [optional] 
**created_date_time** | **datetime** | The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. | [optional] [readonly] 
**notes** | **str** | Release Notes | [optional] 
**updated_date_time** | **datetime** | The time the API release was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_release_contract_properties import ApiReleaseContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiReleaseContractProperties from a JSON string
api_release_contract_properties_instance = ApiReleaseContractProperties.from_json(json)
# print the JSON string representation of the object
print(ApiReleaseContractProperties.to_json())

# convert the object into a dict
api_release_contract_properties_dict = api_release_contract_properties_instance.to_dict()
# create an instance of ApiReleaseContractProperties from a dict
api_release_contract_properties_from_dict = ApiReleaseContractProperties.from_dict(api_release_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


