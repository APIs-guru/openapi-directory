# BaselineMetadataValue

Represents a baseline metadata value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**LocalizableString**](LocalizableString.md) |  | [optional] 
**value** | **str** | the value of the metadata. | [optional] 

## Example

```python
from openapi_client.models.baseline_metadata_value import BaselineMetadataValue

# TODO update the JSON string below
json = "{}"
# create an instance of BaselineMetadataValue from a JSON string
baseline_metadata_value_instance = BaselineMetadataValue.from_json(json)
# print the JSON string representation of the object
print(BaselineMetadataValue.to_json())

# convert the object into a dict
baseline_metadata_value_dict = baseline_metadata_value_instance.to_dict()
# create an instance of BaselineMetadataValue from a dict
baseline_metadata_value_from_dict = BaselineMetadataValue.from_dict(baseline_metadata_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


