# PaymentsProgramResponse

The response object containing the sellers status with regards to the specified payment program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_id** | **str** | The ID of the eBay marketplace to which the payment program applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**payments_program_type** | **str** | This parameter specifies the payment program whose status is returned by the call.  &lt;br&gt;&lt;br&gt;Currently the only supported payments program is &lt;code&gt;EBAY_PAYMENTS&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramType&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status** | **str** | The enumeration value returned in this field indicates whether or not the seller&#39;s account is enabled for the payments program. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramStatus&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**was_previously_opted_in** | **bool** | If returned as &lt;code&gt;true&lt;/code&gt;, the seller was at one point opted-in to the associated payment program, but they later opted out of the program. A value of &lt;code&gt;false&lt;/code&gt; indicates the seller never opted-in to the program or if they did opt-in to the program, they never opted-out of it.  &lt;br&gt;&lt;br&gt;It&#39;s important to note that the setting of this field does not indicate the seller&#39;s current status regarding the payment program. It is possible for this field to return &lt;code&gt;true&lt;/code&gt; while the &lt;b&gt;status&lt;/b&gt; field returns &lt;code&gt;OPTED_IN&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.payments_program_response import PaymentsProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsProgramResponse from a JSON string
payments_program_response_instance = PaymentsProgramResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentsProgramResponse.to_json())

# convert the object into a dict
payments_program_response_dict = payments_program_response_instance.to_dict()
# create an instance of PaymentsProgramResponse from a dict
payments_program_response_from_dict = PaymentsProgramResponse.from_dict(payments_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


