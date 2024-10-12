# SkuAvailability

SKU availability model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated_availability_zone_id** | **str** | CloudSimple Availability Zone id | [optional] 
**dedicated_availability_zone_name** | **str** | CloudSimple Availability Zone Name | [optional] 
**dedicated_placement_group_id** | **str** | CloudSimple Placement Group Id | [optional] 
**dedicated_placement_group_name** | **str** | CloudSimple Placement Group name | [optional] 
**limit** | **int** | indicates how many resources of a given SKU is available in a AZ-&gt;PG | 
**resource_type** | **str** | resource type e.g. DedicatedCloudNodes | [optional] 
**sku_id** | **str** | sku id | [optional] 
**sku_name** | **str** | sku name | [optional] 

## Example

```python
from openapi_client.models.sku_availability import SkuAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of SkuAvailability from a JSON string
sku_availability_instance = SkuAvailability.from_json(json)
# print the JSON string representation of the object
print(SkuAvailability.to_json())

# convert the object into a dict
sku_availability_dict = sku_availability_instance.to_dict()
# create an instance of SkuAvailability from a dict
sku_availability_from_dict = SkuAvailability.from_dict(sku_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


