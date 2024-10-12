# RegionsCapability

The regions capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **List[str]** | The list of region capabilities. | [optional] 

## Example

```python
from openapi_client.models.regions_capability import RegionsCapability

# TODO update the JSON string below
json = "{}"
# create an instance of RegionsCapability from a JSON string
regions_capability_instance = RegionsCapability.from_json(json)
# print the JSON string representation of the object
print(RegionsCapability.to_json())

# convert the object into a dict
regions_capability_dict = regions_capability_instance.to_dict()
# create an instance of RegionsCapability from a dict
regions_capability_from_dict = RegionsCapability.from_dict(regions_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


