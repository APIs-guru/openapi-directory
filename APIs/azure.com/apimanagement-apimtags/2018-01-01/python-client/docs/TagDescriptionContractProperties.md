# TagDescriptionContractProperties

TagDescription contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Tag name. | [optional] 
**description** | **str** | Description of the Tag. | [optional] 
**external_docs_description** | **str** | Description of the external resources describing the tag. | [optional] 
**external_docs_url** | **str** | Absolute URL of external resources describing the tag. | [optional] 

## Example

```python
from openapi_client.models.tag_description_contract_properties import TagDescriptionContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionContractProperties from a JSON string
tag_description_contract_properties_instance = TagDescriptionContractProperties.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionContractProperties.to_json())

# convert the object into a dict
tag_description_contract_properties_dict = tag_description_contract_properties_instance.to_dict()
# create an instance of TagDescriptionContractProperties from a dict
tag_description_contract_properties_from_dict = TagDescriptionContractProperties.from_dict(tag_description_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


