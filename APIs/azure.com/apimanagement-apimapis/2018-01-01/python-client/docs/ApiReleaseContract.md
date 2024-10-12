# ApiReleaseContract

Api Release details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiReleaseContractProperties**](ApiReleaseContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_release_contract import ApiReleaseContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiReleaseContract from a JSON string
api_release_contract_instance = ApiReleaseContract.from_json(json)
# print the JSON string representation of the object
print(ApiReleaseContract.to_json())

# convert the object into a dict
api_release_contract_dict = api_release_contract_instance.to_dict()
# create an instance of ApiReleaseContract from a dict
api_release_contract_from_dict = ApiReleaseContract.from_dict(api_release_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


