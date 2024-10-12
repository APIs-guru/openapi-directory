# CreateAdUnitMappingRequest

Request to create an ad unit mapping under the specific AdMob account and ad unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_unit_mapping** | [**AdUnitMapping**](AdUnitMapping.md) |  | [optional] 
**parent** | **str** | Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id} | [optional] 

## Example

```python
from openapi_client.models.create_ad_unit_mapping_request import CreateAdUnitMappingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdUnitMappingRequest from a JSON string
create_ad_unit_mapping_request_instance = CreateAdUnitMappingRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAdUnitMappingRequest.to_json())

# convert the object into a dict
create_ad_unit_mapping_request_dict = create_ad_unit_mapping_request_instance.to_dict()
# create an instance of CreateAdUnitMappingRequest from a dict
create_ad_unit_mapping_request_from_dict = CreateAdUnitMappingRequest.from_dict(create_ad_unit_mapping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


