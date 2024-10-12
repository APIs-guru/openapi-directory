# Faq

Frequently asked question for the service health event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | FAQ answer for the service health event. | [optional] 
**locale_code** | **str** | FAQ locale for the service health event. | [optional] 
**question** | **str** | FAQ question for the service health event. | [optional] 

## Example

```python
from openapi_client.models.faq import Faq

# TODO update the JSON string below
json = "{}"
# create an instance of Faq from a JSON string
faq_instance = Faq.from_json(json)
# print the JSON string representation of the object
print(Faq.to_json())

# convert the object into a dict
faq_dict = faq_instance.to_dict()
# create an instance of Faq from a dict
faq_from_dict = Faq.from_dict(faq_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


