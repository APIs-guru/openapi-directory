# DefaultOffer

A comparison to the default offer (VDO/DMO) must displayed for each plan. This object contains the title and the message for that presentation. Please refer to the layout guidelines for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Title/Header for the default offer when presented to the user. | [optional] 
**value** | **str** | Text containing the default offer comparison with the current plan | [optional] 

## Example

```python
from openapi_client.models.default_offer import DefaultOffer

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultOffer from a JSON string
default_offer_instance = DefaultOffer.from_json(json)
# print the JSON string representation of the object
print(DefaultOffer.to_json())

# convert the object into a dict
default_offer_dict = default_offer_instance.to_dict()
# create an instance of DefaultOffer from a dict
default_offer_from_dict = DefaultOffer.from_dict(default_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


