# ApiRevisionContract

Api Revision details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiRevisionContractProperties**](ApiRevisionContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_revision_contract import ApiRevisionContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionContract from a JSON string
api_revision_contract_instance = ApiRevisionContract.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionContract.to_json())

# convert the object into a dict
api_revision_contract_dict = api_revision_contract_instance.to_dict()
# create an instance of ApiRevisionContract from a dict
api_revision_contract_from_dict = ApiRevisionContract.from_dict(api_revision_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


