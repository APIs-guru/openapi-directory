# ApiRevisionInfoContract

Object used to create an API Revision or Version based on an existing API Revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_revision_description** | **str** | Description of new API Revision. | [optional] 
**api_version_name** | **str** | Version identifier for the new API Version. | [optional] 
**api_version_set** | [**ApiVersionSetContractDetails**](ApiVersionSetContractDetails.md) |  | [optional] 
**source_api_id** | **str** | Resource identifier of API to be used to create the revision from. | [optional] 

## Example

```python
from openapi_client.models.api_revision_info_contract import ApiRevisionInfoContract

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionInfoContract from a JSON string
api_revision_info_contract_instance = ApiRevisionInfoContract.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionInfoContract.to_json())

# convert the object into a dict
api_revision_info_contract_dict = api_revision_info_contract_instance.to_dict()
# create an instance of ApiRevisionInfoContract from a dict
api_revision_info_contract_from_dict = ApiRevisionInfoContract.from_dict(api_revision_info_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


