# AdultInfo

An object describing whether the image contains adult-oriented content and/or is racy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult_score** | **float** | Score from 0 to 1 that indicates how much of adult content is within the image. | [optional] 
**is_adult_content** | **bool** | A value indicating if the image contains adult-oriented content. | [optional] 
**is_racy_content** | **bool** | A value indicating if the image is race. | [optional] 
**racy_score** | **float** | Score from 0 to 1 that indicates how suggestive is the image. | [optional] 

## Example

```python
from openapi_client.models.adult_info import AdultInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AdultInfo from a JSON string
adult_info_instance = AdultInfo.from_json(json)
# print the JSON string representation of the object
print(AdultInfo.to_json())

# convert the object into a dict
adult_info_dict = adult_info_instance.to_dict()
# create an instance of AdultInfo from a dict
adult_info_from_dict = AdultInfo.from_dict(adult_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


