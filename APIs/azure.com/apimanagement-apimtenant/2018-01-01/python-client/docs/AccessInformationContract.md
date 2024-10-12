# AccessInformationContract

Tenant access information contract of the API Management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Tenant access information of the API Management service. | [optional] 
**id** | **str** | Identifier. | [optional] 
**primary_key** | **str** | Primary access key. | [optional] 
**secondary_key** | **str** | Secondary access key. | [optional] 

## Example

```python
from openapi_client.models.access_information_contract import AccessInformationContract

# TODO update the JSON string below
json = "{}"
# create an instance of AccessInformationContract from a JSON string
access_information_contract_instance = AccessInformationContract.from_json(json)
# print the JSON string representation of the object
print(AccessInformationContract.to_json())

# convert the object into a dict
access_information_contract_dict = access_information_contract_instance.to_dict()
# create an instance of AccessInformationContract from a dict
access_information_contract_from_dict = AccessInformationContract.from_dict(access_information_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


