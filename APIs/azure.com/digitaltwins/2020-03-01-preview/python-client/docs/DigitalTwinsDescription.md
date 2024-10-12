# DigitalTwinsDescription

The description of the DigitalTwins service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DigitalTwinsProperties**](DigitalTwinsProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**sku** | [**DigitalTwinsSkuInfo**](DigitalTwinsSkuInfo.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.digital_twins_description import DigitalTwinsDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsDescription from a JSON string
digital_twins_description_instance = DigitalTwinsDescription.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsDescription.to_json())

# convert the object into a dict
digital_twins_description_dict = digital_twins_description_instance.to_dict()
# create an instance of DigitalTwinsDescription from a dict
digital_twins_description_from_dict = DigitalTwinsDescription.from_dict(digital_twins_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


