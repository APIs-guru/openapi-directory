# RegionContract

Region profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_master_region** | **bool** | whether Region is the master region. | 
**name** | **str** | Region name. | 

## Example

```python
from openapi_client.models.region_contract import RegionContract

# TODO update the JSON string below
json = "{}"
# create an instance of RegionContract from a JSON string
region_contract_instance = RegionContract.from_json(json)
# print the JSON string representation of the object
print(RegionContract.to_json())

# convert the object into a dict
region_contract_dict = region_contract_instance.to_dict()
# create an instance of RegionContract from a dict
region_contract_from_dict = RegionContract.from_dict(region_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


