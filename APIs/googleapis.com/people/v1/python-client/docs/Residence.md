# Residence

**DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **bool** | True if the residence is the person&#39;s current residence; false if the residence is a past residence. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The address of the residence. | [optional] 

## Example

```python
from openapi_client.models.residence import Residence

# TODO update the JSON string below
json = "{}"
# create an instance of Residence from a JSON string
residence_instance = Residence.from_json(json)
# print the JSON string representation of the object
print(Residence.to_json())

# convert the object into a dict
residence_dict = residence_instance.to_dict()
# create an instance of Residence from a dict
residence_from_dict = Residence.from_dict(residence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


