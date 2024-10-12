# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_headers** | **str** | User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format &lt;code&gt;Name: Value&lt;/code&gt;. Jinja2 template processing is supported with the same context as the request body (below). | [optional] 
**body_template** | **str** | Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: &lt;code&gt;event&lt;/code&gt;, &lt;code&gt;model&lt;/code&gt;, &lt;code&gt;timestamp&lt;/code&gt;, &lt;code&gt;username&lt;/code&gt;, &lt;code&gt;request_id&lt;/code&gt;, and &lt;code&gt;data&lt;/code&gt;. | [optional] 
**ca_file_path** | **str** | The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults. | [optional] 
**conditions** | **object** | A set of conditions which determine whether the webhook will be generated. | [optional] 
**content_types** | **List[str]** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**http_content_type** | **str** | The complete list of official content types is available &lt;a href&#x3D;\&quot;https://www.iana.org/assignments/media-types/media-types.xhtml\&quot;&gt;here&lt;/a&gt;. | [optional] 
**http_method** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**payload_url** | **str** | This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body. | 
**secret** | **str** | When provided, the request will include a &#39;X-Hook-Signature&#39; header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request. | [optional] 
**ssl_verification** | **bool** | Enable SSL certificate verification. Disable with caution! | [optional] 
**type_create** | **bool** | Call this webhook when a matching object is created. | [optional] 
**type_delete** | **bool** | Call this webhook when a matching object is deleted. | [optional] 
**type_update** | **bool** | Call this webhook when a matching object is updated. | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.webhook import Webhook

# TODO update the JSON string below
json = "{}"
# create an instance of Webhook from a JSON string
webhook_instance = Webhook.from_json(json)
# print the JSON string representation of the object
print(Webhook.to_json())

# convert the object into a dict
webhook_dict = webhook_instance.to_dict()
# create an instance of Webhook from a dict
webhook_from_dict = Webhook.from_dict(webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


