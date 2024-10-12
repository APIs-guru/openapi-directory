# ImpactedRegion

Object of impacted region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The impacted region id. | [optional] 
**name** | **str** | The impacted region name. | [optional] 

## Example

```python
from openapi_client.models.impacted_region import ImpactedRegion

# TODO update the JSON string below
json = "{}"
# create an instance of ImpactedRegion from a JSON string
impacted_region_instance = ImpactedRegion.from_json(json)
# print the JSON string representation of the object
print(ImpactedRegion.to_json())

# convert the object into a dict
impacted_region_dict = impacted_region_instance.to_dict()
# create an instance of ImpactedRegion from a dict
impacted_region_from_dict = ImpactedRegion.from_dict(impacted_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


