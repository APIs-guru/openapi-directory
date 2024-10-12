# Offer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of offer | [optional] [readonly] 
**display_name** | **str** | It will be displayed prominently in the marketplace | [optional] [readonly] 
**e_tag** | **str** | Identifier for purposes of race condition | [optional] 
**id** | **str** | Offers unique id | [optional] [readonly] 
**long_summary** | **str** | Purpose or function of offer | [optional] [readonly] 
**plans** | [**List[Plan]**](Plan.md) |  | [optional] [readonly] 
**publisher_display_name** | **str** | Publisher name that will be displayed prominently in the marketplace | [optional] [readonly] 
**summary** | **str** | Brief purpose or function of offer | [optional] [readonly] 

## Example

```python
from openapi_client.models.offer import Offer

# TODO update the JSON string below
json = "{}"
# create an instance of Offer from a JSON string
offer_instance = Offer.from_json(json)
# print the JSON string representation of the object
print(Offer.to_json())

# convert the object into a dict
offer_dict = offer_instance.to_dict()
# create an instance of Offer from a dict
offer_from_dict = Offer.from_dict(offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


