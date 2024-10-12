# ReadScaleCapability

The read scale capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_number_of_replicas** | **int** | The maximum number of read scale replicas. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.read_scale_capability import ReadScaleCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ReadScaleCapability from a JSON string
read_scale_capability_instance = ReadScaleCapability.from_json(json)
# print the JSON string representation of the object
print(ReadScaleCapability.to_json())

# convert the object into a dict
read_scale_capability_dict = read_scale_capability_instance.to_dict()
# create an instance of ReadScaleCapability from a dict
read_scale_capability_from_dict = ReadScaleCapability.from_dict(read_scale_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


