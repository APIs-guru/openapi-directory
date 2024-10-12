# BaselineMetadata

Represents a baseline metadata value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the baseline metadata. | 
**value** | **str** | Value of the baseline metadata. | 

## Example

```python
from openapi_client.models.baseline_metadata import BaselineMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BaselineMetadata from a JSON string
baseline_metadata_instance = BaselineMetadata.from_json(json)
# print the JSON string representation of the object
print(BaselineMetadata.to_json())

# convert the object into a dict
baseline_metadata_dict = baseline_metadata_instance.to_dict()
# create an instance of BaselineMetadata from a dict
baseline_metadata_from_dict = BaselineMetadata.from_dict(baseline_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


