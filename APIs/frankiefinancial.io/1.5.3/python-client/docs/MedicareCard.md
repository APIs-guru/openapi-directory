# MedicareCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_color** | **str** | Card color | [optional] 
**expiry_date** | **str** | Expiry date of drivers licence | 
**middle_name** | **str** | Middle Name on Card | [optional] 
**number** | **str** | Medicare Card Number | 
**reference_number** | **str** | Medicare Card Reference Number | [optional] 
**type** | **str** | Document identifier | 

## Example

```python
from openapi_client.models.medicare_card import MedicareCard

# TODO update the JSON string below
json = "{}"
# create an instance of MedicareCard from a JSON string
medicare_card_instance = MedicareCard.from_json(json)
# print the JSON string representation of the object
print(MedicareCard.to_json())

# convert the object into a dict
medicare_card_dict = medicare_card_instance.to_dict()
# create an instance of MedicareCard from a dict
medicare_card_from_dict = MedicareCard.from_dict(medicare_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


