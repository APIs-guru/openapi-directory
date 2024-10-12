# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_email** | **str** | The customer&#39;s secondary contact email address. This email address cannot be on the same domain as the &#x60;customerDomain&#x60; | [optional] 
**customer_creation_time** | **datetime** | The customer&#39;s creation time (Readonly) | [optional] 
**customer_domain** | **str** | The customer&#39;s primary domain name string. Do not include the &#x60;www&#x60; prefix when creating a new customer. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | The unique ID for the customer&#39;s Google Workspace account. (Readonly) | [optional] 
**kind** | **str** | Identifies the resource as a customer. Value: &#x60;admin#directory#customer&#x60; | [optional] [default to 'admin#directory#customer']
**language** | **str** | The customer&#39;s ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is &#x60;en&#x60;. | [optional] 
**phone_number** | **str** | The customer&#39;s contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. | [optional] 
**postal_address** | [**CustomerPostalAddress**](CustomerPostalAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer import Customer

# TODO update the JSON string below
json = "{}"
# create an instance of Customer from a JSON string
customer_instance = Customer.from_json(json)
# print the JSON string representation of the object
print(Customer.to_json())

# convert the object into a dict
customer_dict = customer_instance.to_dict()
# create an instance of Customer from a dict
customer_from_dict = Customer.from_dict(customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


