# DigitalTwinsResource

The common properties of a DigitalTwinsInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**sku** | [**DigitalTwinsSkuInfo**](DigitalTwinsSkuInfo.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.digital_twins_resource import DigitalTwinsResource

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsResource from a JSON string
digital_twins_resource_instance = DigitalTwinsResource.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsResource.to_json())

# convert the object into a dict
digital_twins_resource_dict = digital_twins_resource_instance.to_dict()
# create an instance of DigitalTwinsResource from a dict
digital_twins_resource_from_dict = DigitalTwinsResource.from_dict(digital_twins_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


