# MetadataValue

Represents a metric metadata value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**LocalizableString**](LocalizableString.md) |  | [optional] 
**value** | **str** | the value of the metadata. | [optional] 

## Example

```python
from openapi_client.models.metadata_value import MetadataValue

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataValue from a JSON string
metadata_value_instance = MetadataValue.from_json(json)
# print the JSON string representation of the object
print(MetadataValue.to_json())

# convert the object into a dict
metadata_value_dict = metadata_value_instance.to_dict()
# create an instance of MetadataValue from a dict
metadata_value_from_dict = MetadataValue.from_dict(metadata_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


