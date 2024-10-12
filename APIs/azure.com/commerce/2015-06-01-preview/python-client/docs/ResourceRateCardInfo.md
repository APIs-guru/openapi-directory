# ResourceRateCardInfo

Price and Metadata information for resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency in which the rates are provided. | [optional] 
**is_tax_included** | **bool** | All rates are pretax, so this will always be returned as &#39;false&#39;. | [optional] 
**locale** | **str** | The culture in which the resource information is localized. | [optional] 
**meters** | [**List[MeterInfo]**](MeterInfo.md) | A list of meters. | [optional] 
**offer_terms** | [**List[OfferTermInfo]**](OfferTermInfo.md) | A list of offer terms. | [optional] 

## Example

```python
from openapi_client.models.resource_rate_card_info import ResourceRateCardInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRateCardInfo from a JSON string
resource_rate_card_info_instance = ResourceRateCardInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceRateCardInfo.to_json())

# convert the object into a dict
resource_rate_card_info_dict = resource_rate_card_info_instance.to_dict()
# create an instance of ResourceRateCardInfo from a dict
resource_rate_card_info_from_dict = ResourceRateCardInfo.from_dict(resource_rate_card_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


