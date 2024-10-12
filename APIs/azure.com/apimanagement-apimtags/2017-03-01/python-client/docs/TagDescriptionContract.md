# TagDescriptionContract

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagDescriptionContractProperties**](TagDescriptionContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_description_contract import TagDescriptionContract

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionContract from a JSON string
tag_description_contract_instance = TagDescriptionContract.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionContract.to_json())

# convert the object into a dict
tag_description_contract_dict = tag_description_contract_instance.to_dict()
# create an instance of TagDescriptionContract from a dict
tag_description_contract_from_dict = TagDescriptionContract.from_dict(tag_description_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


