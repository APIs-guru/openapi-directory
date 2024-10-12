# PremiumMessagingRegions

Premium Messaging Region

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**location** | **str** | Resource location | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.premium_messaging_regions import PremiumMessagingRegions

# TODO update the JSON string below
json = "{}"
# create an instance of PremiumMessagingRegions from a JSON string
premium_messaging_regions_instance = PremiumMessagingRegions.from_json(json)
# print the JSON string representation of the object
print(PremiumMessagingRegions.to_json())

# convert the object into a dict
premium_messaging_regions_dict = premium_messaging_regions_instance.to_dict()
# create an instance of PremiumMessagingRegions from a dict
premium_messaging_regions_from_dict = PremiumMessagingRegions.from_dict(premium_messaging_regions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


