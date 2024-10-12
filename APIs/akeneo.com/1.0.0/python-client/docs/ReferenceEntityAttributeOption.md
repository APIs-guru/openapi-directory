# ReferenceEntityAttributeOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Attribute&#39;s option code | 
**labels** | [**GetAssetFamiliesCodeAttributes200ResponseInnerLabels**](GetAssetFamiliesCodeAttributes200ResponseInnerLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entity_attribute_option import ReferenceEntityAttributeOption

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityAttributeOption from a JSON string
reference_entity_attribute_option_instance = ReferenceEntityAttributeOption.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityAttributeOption.to_json())

# convert the object into a dict
reference_entity_attribute_option_dict = reference_entity_attribute_option_instance.to_dict()
# create an instance of ReferenceEntityAttributeOption from a dict
reference_entity_attribute_option_from_dict = ReferenceEntityAttributeOption.from_dict(reference_entity_attribute_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


