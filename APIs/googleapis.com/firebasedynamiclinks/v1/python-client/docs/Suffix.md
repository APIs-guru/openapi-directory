# Suffix

Short Dynamic Link suffix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_suffix** | **str** | Only applies to Option.CUSTOM. | [optional] 
**option** | **str** | Suffix option. | [optional] 

## Example

```python
from openapi_client.models.suffix import Suffix

# TODO update the JSON string below
json = "{}"
# create an instance of Suffix from a JSON string
suffix_instance = Suffix.from_json(json)
# print the JSON string representation of the object
print(Suffix.to_json())

# convert the object into a dict
suffix_dict = suffix_instance.to_dict()
# create an instance of Suffix from a dict
suffix_from_dict = Suffix.from_dict(suffix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


