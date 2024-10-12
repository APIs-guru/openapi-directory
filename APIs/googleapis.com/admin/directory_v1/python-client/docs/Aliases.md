# Aliases

JSON response template to list aliases in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[object]** |  | [optional] 
**etag** | **str** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'admin#directory#aliases']

## Example

```python
from openapi_client.models.aliases import Aliases

# TODO update the JSON string below
json = "{}"
# create an instance of Aliases from a JSON string
aliases_instance = Aliases.from_json(json)
# print the JSON string representation of the object
print(Aliases.to_json())

# convert the object into a dict
aliases_dict = aliases_instance.to_dict()
# create an instance of Aliases from a dict
aliases_from_dict = Aliases.from_dict(aliases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


