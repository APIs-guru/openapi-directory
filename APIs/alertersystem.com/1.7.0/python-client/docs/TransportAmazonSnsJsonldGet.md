# TransportAmazonSnsJsonldGet

The TransportAmazonSns resource is a collection of transports that carry dispatched alerts to the external Amazon SNS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**amazon_sns_access_key** | **str** | The access key for the Amazon SNS service. | 
**amazon_sns_region** | **str** | The region for the Amazon SNS service. | 
**amazon_sns_secret_key** | **str** | The secret key for the Amazon SNS service. Stored in encrypted format. | 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_amazon_sns_jsonld_get import TransportAmazonSnsJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAmazonSnsJsonldGet from a JSON string
transport_amazon_sns_jsonld_get_instance = TransportAmazonSnsJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportAmazonSnsJsonldGet.to_json())

# convert the object into a dict
transport_amazon_sns_jsonld_get_dict = transport_amazon_sns_jsonld_get_instance.to_dict()
# create an instance of TransportAmazonSnsJsonldGet from a dict
transport_amazon_sns_jsonld_get_from_dict = TransportAmazonSnsJsonldGet.from_dict(transport_amazon_sns_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


