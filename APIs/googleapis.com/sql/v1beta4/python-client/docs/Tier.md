# Tier

A Google Cloud SQL service tier resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_quota** | **str** | The maximum disk size of this tier in bytes. | [optional] 
**ram** | **str** | The maximum RAM usage of this tier in bytes. | [optional] 
**kind** | **str** | This is always &#x60;sql#tier&#x60;. | [optional] 
**region** | **List[str]** | The applicable regions for this tier. | [optional] 
**tier** | **str** | An identifier for the machine type, for example, &#x60;db-custom-1-3840&#x60;. For related information, see [Pricing](/sql/pricing). | [optional] 

## Example

```python
from openapi_client.models.tier import Tier

# TODO update the JSON string below
json = "{}"
# create an instance of Tier from a JSON string
tier_instance = Tier.from_json(json)
# print the JSON string representation of the object
print(Tier.to_json())

# convert the object into a dict
tier_dict = tier_instance.to_dict()
# create an instance of Tier from a dict
tier_from_dict = Tier.from_dict(tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


