# TransportAmazonSnsJsonldPost

The TransportAmazonSns resource is a collection of transports that carry dispatched alerts to the external Amazon SNS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazon_sns_access_key** | **str** | The access key for the Amazon SNS service. | 
**amazon_sns_region** | **str** | The region for the Amazon SNS service. | 
**amazon_sns_secret_key** | **str** | The secret key for the Amazon SNS service. Stored in encrypted format. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_amazon_sns_jsonld_post import TransportAmazonSnsJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAmazonSnsJsonldPost from a JSON string
transport_amazon_sns_jsonld_post_instance = TransportAmazonSnsJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportAmazonSnsJsonldPost.to_json())

# convert the object into a dict
transport_amazon_sns_jsonld_post_dict = transport_amazon_sns_jsonld_post_instance.to_dict()
# create an instance of TransportAmazonSnsJsonldPost from a dict
transport_amazon_sns_jsonld_post_from_dict = TransportAmazonSnsJsonldPost.from_dict(transport_amazon_sns_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


