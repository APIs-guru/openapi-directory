# TagContract

Tag Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Tag contract Properties. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_contract import TagContract

# TODO update the JSON string below
json = "{}"
# create an instance of TagContract from a JSON string
tag_contract_instance = TagContract.from_json(json)
# print the JSON string representation of the object
print(TagContract.to_json())

# convert the object into a dict
tag_contract_dict = tag_contract_instance.to_dict()
# create an instance of TagContract from a dict
tag_contract_from_dict = TagContract.from_dict(tag_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


