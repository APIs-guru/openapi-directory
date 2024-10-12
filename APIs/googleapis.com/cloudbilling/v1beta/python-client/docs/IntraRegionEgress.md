# IntraRegionEgress

Data transfer within the same region. When the source region and destination region are in the same zone, using internal IP addresses, there isn't any charge for data transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.intra_region_egress import IntraRegionEgress

# TODO update the JSON string below
json = "{}"
# create an instance of IntraRegionEgress from a JSON string
intra_region_egress_instance = IntraRegionEgress.from_json(json)
# print the JSON string representation of the object
print(IntraRegionEgress.to_json())

# convert the object into a dict
intra_region_egress_dict = intra_region_egress_instance.to_dict()
# create an instance of IntraRegionEgress from a dict
intra_region_egress_from_dict = IntraRegionEgress.from_dict(intra_region_egress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


