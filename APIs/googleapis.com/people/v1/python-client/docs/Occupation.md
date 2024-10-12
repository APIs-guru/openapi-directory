# Occupation

A person's occupation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The occupation; for example, &#x60;carpenter&#x60;. | [optional] 

## Example

```python
from openapi_client.models.occupation import Occupation

# TODO update the JSON string below
json = "{}"
# create an instance of Occupation from a JSON string
occupation_instance = Occupation.from_json(json)
# print the JSON string representation of the object
print(Occupation.to_json())

# convert the object into a dict
occupation_dict = occupation_instance.to_dict()
# create an instance of Occupation from a dict
occupation_from_dict = Occupation.from_dict(occupation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


