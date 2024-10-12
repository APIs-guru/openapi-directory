# SkuAvailabilityListResponse

List of SKU availabilities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of DedicatedCloudNode | [optional] 
**value** | [**List[SkuAvailability]**](SkuAvailability.md) | Results of the DedicatedPlacementGroupSkuAvailability list | [optional] 

## Example

```python
from openapi_client.models.sku_availability_list_response import SkuAvailabilityListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SkuAvailabilityListResponse from a JSON string
sku_availability_list_response_instance = SkuAvailabilityListResponse.from_json(json)
# print the JSON string representation of the object
print(SkuAvailabilityListResponse.to_json())

# convert the object into a dict
sku_availability_list_response_dict = sku_availability_list_response_instance.to_dict()
# create an instance of SkuAvailabilityListResponse from a dict
sku_availability_list_response_from_dict = SkuAvailabilityListResponse.from_dict(sku_availability_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


