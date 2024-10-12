# Precondition

A precondition on a document, used for conditional operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exists** | **bool** | When set to &#x60;true&#x60;, the target document must exist. When set to &#x60;false&#x60;, the target document must not exist. | [optional] 
**update_time** | **str** | When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. | [optional] 

## Example

```python
from openapi_client.models.precondition import Precondition

# TODO update the JSON string below
json = "{}"
# create an instance of Precondition from a JSON string
precondition_instance = Precondition.from_json(json)
# print the JSON string representation of the object
print(Precondition.to_json())

# convert the object into a dict
precondition_dict = precondition_instance.to_dict()
# create an instance of Precondition from a dict
precondition_from_dict = Precondition.from_dict(precondition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


