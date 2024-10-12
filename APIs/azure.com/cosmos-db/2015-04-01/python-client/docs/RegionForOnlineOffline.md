# RegionForOnlineOffline

Cosmos DB region to online or offline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Cosmos DB region, with spaces between words and each word capitalized. | 

## Example

```python
from openapi_client.models.region_for_online_offline import RegionForOnlineOffline

# TODO update the JSON string below
json = "{}"
# create an instance of RegionForOnlineOffline from a JSON string
region_for_online_offline_instance = RegionForOnlineOffline.from_json(json)
# print the JSON string representation of the object
print(RegionForOnlineOffline.to_json())

# convert the object into a dict
region_for_online_offline_dict = region_for_online_offline_instance.to_dict()
# create an instance of RegionForOnlineOffline from a dict
region_for_online_offline_from_dict = RegionForOnlineOffline.from_dict(region_for_online_offline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


