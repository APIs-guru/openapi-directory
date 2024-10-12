# AcrTagAttributes

Tag attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Image name | [optional] 
**registry** | **str** | Registry name | [optional] 
**tag** | [**AcrTagAttributesBase**](AcrTagAttributesBase.md) |  | [optional] 

## Example

```python
from openapi_client.models.acr_tag_attributes import AcrTagAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AcrTagAttributes from a JSON string
acr_tag_attributes_instance = AcrTagAttributes.from_json(json)
# print the JSON string representation of the object
print(AcrTagAttributes.to_json())

# convert the object into a dict
acr_tag_attributes_dict = acr_tag_attributes_instance.to_dict()
# create an instance of AcrTagAttributes from a dict
acr_tag_attributes_from_dict = AcrTagAttributes.from_dict(acr_tag_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


