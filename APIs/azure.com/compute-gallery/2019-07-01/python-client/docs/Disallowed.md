# Disallowed

Describes the disallowed disk types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_types** | **List[str]** | A list of disk types. | [optional] 

## Example

```python
from openapi_client.models.disallowed import Disallowed

# TODO update the JSON string below
json = "{}"
# create an instance of Disallowed from a JSON string
disallowed_instance = Disallowed.from_json(json)
# print the JSON string representation of the object
print(Disallowed.to_json())

# convert the object into a dict
disallowed_dict = disallowed_instance.to_dict()
# create an instance of Disallowed from a dict
disallowed_from_dict = Disallowed.from_dict(disallowed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


