# KeyValue

The result of a request to retrieve a key-value from the specified configuration store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The content type of the key-value&#39;s value.  Providing a proper content-type can enable transformations of values when they are retrieved by applications. | [optional] [readonly] 
**e_tag** | **str** | An ETag indicating the state of a key-value within a configuration store. | [optional] [readonly] 
**key** | **str** | The primary identifier of a key-value.  The key is used in unison with the label to uniquely identify a key-value. | [optional] [readonly] 
**label** | **str** | A value used to group key-values.  The label is used in unison with the key to uniquely identify a key-value. | [optional] [readonly] 
**last_modified** | **datetime** | The last time a modifying operation was performed on the given key-value. | [optional] [readonly] 
**locked** | **bool** | A value indicating whether the key-value is locked.  A locked key-value may not be modified until it is unlocked. | [optional] [readonly] 
**tags** | **Dict[str, str]** | A dictionary of tags that can help identify what a key-value may be applicable for. | [optional] [readonly] 
**value** | **str** | The value of the key-value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_value import KeyValue

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValue from a JSON string
key_value_instance = KeyValue.from_json(json)
# print the JSON string representation of the object
print(KeyValue.to_json())

# convert the object into a dict
key_value_dict = key_value_instance.to_dict()
# create an instance of KeyValue from a dict
key_value_from_dict = KeyValue.from_dict(key_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


