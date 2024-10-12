# IotHubDescription

The description of the IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | [optional] 
**properties** | [**IotHubProperties**](IotHubProperties.md) |  | [optional] 
**resourcegroup** | **str** | The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription. | 
**sku** | [**IotHubSkuInfo**](IotHubSkuInfo.md) |  | 
**subscriptionid** | **str** | The subscription identifier. | 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_description import IotHubDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubDescription from a JSON string
iot_hub_description_instance = IotHubDescription.from_json(json)
# print the JSON string representation of the object
print(IotHubDescription.to_json())

# convert the object into a dict
iot_hub_description_dict = iot_hub_description_instance.to_dict()
# create an instance of IotHubDescription from a dict
iot_hub_description_from_dict = IotHubDescription.from_dict(iot_hub_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


