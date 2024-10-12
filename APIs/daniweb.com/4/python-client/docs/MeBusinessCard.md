# MeBusinessCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**company_size** | **str** |  | [optional] 
**headline** | **str** |  | [optional] 
**industry** | **str** |  | [optional] 
**interest_tags** | **List[str]** |  | [optional] 
**job_position** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**website** | [**MeBusinessCardWebsite**](MeBusinessCardWebsite.md) |  | [optional] 

## Example

```python
from openapi_client.models.me_business_card import MeBusinessCard

# TODO update the JSON string below
json = "{}"
# create an instance of MeBusinessCard from a JSON string
me_business_card_instance = MeBusinessCard.from_json(json)
# print the JSON string representation of the object
print(MeBusinessCard.to_json())

# convert the object into a dict
me_business_card_dict = me_business_card_instance.to_dict()
# create an instance of MeBusinessCard from a dict
me_business_card_from_dict = MeBusinessCard.from_dict(me_business_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


