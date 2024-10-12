# AlternativeIdentifier

Additional information some carriers may provide by which to identify a given label in their system.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of alternative_identifier that corresponds to the value.  | [optional] 
**value** | **str** | The value of the alternative_identifier.  | [optional] 

## Example

```python
from openapi_client.models.alternative_identifier import AlternativeIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of AlternativeIdentifier from a JSON string
alternative_identifier_instance = AlternativeIdentifier.from_json(json)
# print the JSON string representation of the object
print(AlternativeIdentifier.to_json())

# convert the object into a dict
alternative_identifier_dict = alternative_identifier_instance.to_dict()
# create an instance of AlternativeIdentifier from a dict
alternative_identifier_from_dict = AlternativeIdentifier.from_dict(alternative_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


