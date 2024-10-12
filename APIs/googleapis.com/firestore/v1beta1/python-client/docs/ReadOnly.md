# ReadOnly

Options for a transaction that can only be used to read documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read_time** | **str** | Reads documents at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 

## Example

```python
from openapi_client.models.read_only import ReadOnly

# TODO update the JSON string below
json = "{}"
# create an instance of ReadOnly from a JSON string
read_only_instance = ReadOnly.from_json(json)
# print the JSON string representation of the object
print(ReadOnly.to_json())

# convert the object into a dict
read_only_dict = read_only_instance.to_dict()
# create an instance of ReadOnly from a dict
read_only_from_dict = ReadOnly.from_dict(read_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


