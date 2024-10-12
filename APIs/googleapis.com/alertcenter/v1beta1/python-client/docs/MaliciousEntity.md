# MaliciousEntity

Entity whose actions triggered a Gmail phishing alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The header from display name. | [optional] 
**entity** | [**User**](User.md) |  | [optional] 
**from_header** | **str** | The sender email address. | [optional] 

## Example

```python
from openapi_client.models.malicious_entity import MaliciousEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MaliciousEntity from a JSON string
malicious_entity_instance = MaliciousEntity.from_json(json)
# print the JSON string representation of the object
print(MaliciousEntity.to_json())

# convert the object into a dict
malicious_entity_dict = malicious_entity_instance.to_dict()
# create an instance of MaliciousEntity from a dict
malicious_entity_from_dict = MaliciousEntity.from_dict(malicious_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


