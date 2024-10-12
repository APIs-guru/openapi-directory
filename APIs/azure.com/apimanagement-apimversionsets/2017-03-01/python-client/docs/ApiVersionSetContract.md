# ApiVersionSetContract

Api Version Set Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiVersionSetContractProperties**](ApiVersionSetContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_version_set_contract import ApiVersionSetContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetContract from a JSON string
api_version_set_contract_instance = ApiVersionSetContract.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetContract.to_json())

# convert the object into a dict
api_version_set_contract_dict = api_version_set_contract_instance.to_dict()
# create an instance of ApiVersionSetContract from a dict
api_version_set_contract_from_dict = ApiVersionSetContract.from_dict(api_version_set_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


