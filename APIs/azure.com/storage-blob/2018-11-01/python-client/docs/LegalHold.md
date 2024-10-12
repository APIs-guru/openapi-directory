# LegalHold

The LegalHold property of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_legal_hold** | **bool** | The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold&#x3D;true for a given account. | [optional] [readonly] 
**tags** | **List[str]** | Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP. | 

## Example

```python
from openapi_client.models.legal_hold import LegalHold

# TODO update the JSON string below
json = "{}"
# create an instance of LegalHold from a JSON string
legal_hold_instance = LegalHold.from_json(json)
# print the JSON string representation of the object
print(LegalHold.to_json())

# convert the object into a dict
legal_hold_dict = legal_hold_instance.to_dict()
# create an instance of LegalHold from a dict
legal_hold_from_dict = LegalHold.from_dict(legal_hold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


