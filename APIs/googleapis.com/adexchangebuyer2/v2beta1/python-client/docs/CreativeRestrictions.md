# CreativeRestrictions

Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_format** | **str** | The format of the environment that the creatives will be displayed in. | [optional] 
**creative_specifications** | [**List[CreativeSpecification]**](CreativeSpecification.md) |  | [optional] 
**skippable_ad_type** | **str** | Skippable video ads allow viewers to skip ads after 5 seconds. | [optional] 

## Example

```python
from openapi_client.models.creative_restrictions import CreativeRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeRestrictions from a JSON string
creative_restrictions_instance = CreativeRestrictions.from_json(json)
# print the JSON string representation of the object
print(CreativeRestrictions.to_json())

# convert the object into a dict
creative_restrictions_dict = creative_restrictions_instance.to_dict()
# create an instance of CreativeRestrictions from a dict
creative_restrictions_from_dict = CreativeRestrictions.from_dict(creative_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


