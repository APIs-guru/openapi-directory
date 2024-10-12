# Split

An initial split point for a newly created table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **bytearray** | Row key to use as an initial tablet boundary. | [optional] 

## Example

```python
from openapi_client.models.split import Split

# TODO update the JSON string below
json = "{}"
# create an instance of Split from a JSON string
split_instance = Split.from_json(json)
# print the JSON string representation of the object
print(Split.to_json())

# convert the object into a dict
split_dict = split_instance.to_dict()
# create an instance of Split from a dict
split_from_dict = Split.from_dict(split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


