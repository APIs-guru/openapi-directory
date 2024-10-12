# AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution

The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**median** | **int** |  | [optional] 
**sigma** | **float** |  | [optional] 
**type** | **str** |  | [optional] 
**lower** | **int** |  | [optional] 
**upper** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution import AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution from a JSON string
admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution_instance = AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution.to_json())

# convert the object into a dict
admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution_dict = admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution_instance.to_dict()
# create an instance of AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution from a dict
admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution_from_dict = AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution.from_dict(admin_mappings_get200_response_mappings_inner_response_all_of_delay_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


