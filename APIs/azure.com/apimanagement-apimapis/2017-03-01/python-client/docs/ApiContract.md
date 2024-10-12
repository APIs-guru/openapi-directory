# ApiContract

API details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Api Entity Properties | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_contract import ApiContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiContract from a JSON string
api_contract_instance = ApiContract.from_json(json)
# print the JSON string representation of the object
print(ApiContract.to_json())

# convert the object into a dict
api_contract_dict = api_contract_instance.to_dict()
# create an instance of ApiContract from a dict
api_contract_from_dict = ApiContract.from_dict(api_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


