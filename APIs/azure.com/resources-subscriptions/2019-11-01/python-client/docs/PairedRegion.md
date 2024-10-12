# PairedRegion

Information regarding paired region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. | [optional] [readonly] 
**name** | **str** | The name of the paired region. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.paired_region import PairedRegion

# TODO update the JSON string below
json = "{}"
# create an instance of PairedRegion from a JSON string
paired_region_instance = PairedRegion.from_json(json)
# print the JSON string representation of the object
print(PairedRegion.to_json())

# convert the object into a dict
paired_region_dict = paired_region_instance.to_dict()
# create an instance of PairedRegion from a dict
paired_region_from_dict = PairedRegion.from_dict(paired_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


