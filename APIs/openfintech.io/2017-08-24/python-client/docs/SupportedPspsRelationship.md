# SupportedPspsRelationship

Supported psps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SupportedPspsRelationshipDataInner]**](SupportedPspsRelationshipDataInner.md) |  | [optional] 
**links** | [**SupportedPspsRelationshipLinks**](SupportedPspsRelationshipLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.supported_psps_relationship import SupportedPspsRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedPspsRelationship from a JSON string
supported_psps_relationship_instance = SupportedPspsRelationship.from_json(json)
# print the JSON string representation of the object
print(SupportedPspsRelationship.to_json())

# convert the object into a dict
supported_psps_relationship_dict = supported_psps_relationship_instance.to_dict()
# create an instance of SupportedPspsRelationship from a dict
supported_psps_relationship_from_dict = SupportedPspsRelationship.from_dict(supported_psps_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


