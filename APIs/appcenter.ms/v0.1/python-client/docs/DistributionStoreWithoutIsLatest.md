# DistributionStoreWithoutIsLatest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 

## Example

```python
from openapi_client.models.distribution_store_without_is_latest import DistributionStoreWithoutIsLatest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionStoreWithoutIsLatest from a JSON string
distribution_store_without_is_latest_instance = DistributionStoreWithoutIsLatest.from_json(json)
# print the JSON string representation of the object
print(DistributionStoreWithoutIsLatest.to_json())

# convert the object into a dict
distribution_store_without_is_latest_dict = distribution_store_without_is_latest_instance.to_dict()
# create an instance of DistributionStoreWithoutIsLatest from a dict
distribution_store_without_is_latest_from_dict = DistributionStoreWithoutIsLatest.from_dict(distribution_store_without_is_latest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


