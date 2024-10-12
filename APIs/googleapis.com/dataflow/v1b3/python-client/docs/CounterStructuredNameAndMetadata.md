# CounterStructuredNameAndMetadata

A single message which encapsulates structured name and metadata for a given counter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**CounterMetadata**](CounterMetadata.md) |  | [optional] 
**name** | [**CounterStructuredName**](CounterStructuredName.md) |  | [optional] 

## Example

```python
from openapi_client.models.counter_structured_name_and_metadata import CounterStructuredNameAndMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CounterStructuredNameAndMetadata from a JSON string
counter_structured_name_and_metadata_instance = CounterStructuredNameAndMetadata.from_json(json)
# print the JSON string representation of the object
print(CounterStructuredNameAndMetadata.to_json())

# convert the object into a dict
counter_structured_name_and_metadata_dict = counter_structured_name_and_metadata_instance.to_dict()
# create an instance of CounterStructuredNameAndMetadata from a dict
counter_structured_name_and_metadata_from_dict = CounterStructuredNameAndMetadata.from_dict(counter_structured_name_and_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


