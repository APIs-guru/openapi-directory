# AcrTagAttributesBase

Tag attribute details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeable_attributes** | [**ChangeableAttributes**](ChangeableAttributes.md) |  | [optional] 
**created_time** | **str** | Tag created time | [optional] 
**digest** | **str** | Tag digest | [optional] 
**last_update_time** | **str** | Tag last update time | [optional] 
**name** | **str** | Tag name | [optional] 
**signed** | **bool** | Is signed | [optional] 

## Example

```python
from openapi_client.models.acr_tag_attributes_base import AcrTagAttributesBase

# TODO update the JSON string below
json = "{}"
# create an instance of AcrTagAttributesBase from a JSON string
acr_tag_attributes_base_instance = AcrTagAttributesBase.from_json(json)
# print the JSON string representation of the object
print(AcrTagAttributesBase.to_json())

# convert the object into a dict
acr_tag_attributes_base_dict = acr_tag_attributes_base_instance.to_dict()
# create an instance of AcrTagAttributesBase from a dict
acr_tag_attributes_base_from_dict = AcrTagAttributesBase.from_dict(acr_tag_attributes_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


