# AdIds

This type is a container for a list of ad IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_ids** | **List[str]** | A list of ad IDs. Only one ad can be deleted per operation and only one adId value will be returned. | [optional] 

## Example

```python
from openapi_client.models.ad_ids import AdIds

# TODO update the JSON string below
json = "{}"
# create an instance of AdIds from a JSON string
ad_ids_instance = AdIds.from_json(json)
# print the JSON string representation of the object
print(AdIds.to_json())

# convert the object into a dict
ad_ids_dict = ad_ids_instance.to_dict()
# create an instance of AdIds from a dict
ad_ids_from_dict = AdIds.from_dict(ad_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


