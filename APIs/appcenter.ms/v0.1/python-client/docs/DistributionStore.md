# DistributionStore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 

## Example

```python
from openapi_client.models.distribution_store import DistributionStore

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionStore from a JSON string
distribution_store_instance = DistributionStore.from_json(json)
# print the JSON string representation of the object
print(DistributionStore.to_json())

# convert the object into a dict
distribution_store_dict = distribution_store_instance.to_dict()
# create an instance of DistributionStore from a dict
distribution_store_from_dict = DistributionStore.from_dict(distribution_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


