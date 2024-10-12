# LegalHoldProperties

The LegalHold property of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_legal_hold** | **bool** | The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold&#x3D;true for a given account. | [optional] [readonly] 
**tags** | [**List[TagProperty]**](TagProperty.md) | The list of LegalHold tags of a blob container. | [optional] 

## Example

```python
from openapi_client.models.legal_hold_properties import LegalHoldProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LegalHoldProperties from a JSON string
legal_hold_properties_instance = LegalHoldProperties.from_json(json)
# print the JSON string representation of the object
print(LegalHoldProperties.to_json())

# convert the object into a dict
legal_hold_properties_dict = legal_hold_properties_instance.to_dict()
# create an instance of LegalHoldProperties from a dict
legal_hold_properties_from_dict = LegalHoldProperties.from_dict(legal_hold_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


