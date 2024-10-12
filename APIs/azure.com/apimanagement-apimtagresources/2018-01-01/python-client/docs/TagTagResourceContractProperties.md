# TagTagResourceContractProperties

Contract defining the Tag property in the Tag Resource Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Tag identifier | [optional] 
**name** | **str** | Tag Name | [optional] 

## Example

```python
from openapi_client.models.tag_tag_resource_contract_properties import TagTagResourceContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagTagResourceContractProperties from a JSON string
tag_tag_resource_contract_properties_instance = TagTagResourceContractProperties.from_json(json)
# print the JSON string representation of the object
print(TagTagResourceContractProperties.to_json())

# convert the object into a dict
tag_tag_resource_contract_properties_dict = tag_tag_resource_contract_properties_instance.to_dict()
# create an instance of TagTagResourceContractProperties from a dict
tag_tag_resource_contract_properties_from_dict = TagTagResourceContractProperties.from_dict(tag_tag_resource_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


