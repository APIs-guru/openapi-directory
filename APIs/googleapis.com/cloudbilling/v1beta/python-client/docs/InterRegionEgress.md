# InterRegionEgress

Data transfer between two regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_region** | **str** | Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred to. | [optional] 
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 
**source_region** | **str** | Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. | [optional] 

## Example

```python
from openapi_client.models.inter_region_egress import InterRegionEgress

# TODO update the JSON string below
json = "{}"
# create an instance of InterRegionEgress from a JSON string
inter_region_egress_instance = InterRegionEgress.from_json(json)
# print the JSON string representation of the object
print(InterRegionEgress.to_json())

# convert the object into a dict
inter_region_egress_dict = inter_region_egress_instance.to_dict()
# create an instance of InterRegionEgress from a dict
inter_region_egress_from_dict = InterRegionEgress.from_dict(inter_region_egress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


