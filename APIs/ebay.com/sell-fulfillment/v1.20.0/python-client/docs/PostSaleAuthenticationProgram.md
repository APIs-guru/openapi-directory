# PostSaleAuthenticationProgram

This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outcome_reason** | **str** | This field indicates the result of the authenticity verification inspection on an order line item. This field is not returned when the status value of the order line item is &lt;code&gt;PENDING&lt;/code&gt; or &lt;code&gt;PASSED&lt;/code&gt;. The possible values returned here are &lt;code&gt;NOT_AUTHENTIC&lt;/code&gt;, &lt;code&gt;NOT_AS_DESCRIBED&lt;/code&gt;, &lt;code&gt;CUSTOMIZED&lt;/code&gt;, &lt;code&gt;MISCATEGORIZED&lt;/code&gt;, or &lt;code&gt;NOT_AUTHENTIC_NO_RETURN&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationReasonEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status** | **str** | The value in this field indicates whether the order line item has passed or failed the authenticity verification inspection, or if the inspection and/or results are still pending. The possible values returned here are &lt;code&gt;PENDING&lt;/code&gt;, &lt;code&gt;PASSED&lt;/code&gt;, &lt;code&gt;FAILED&lt;/code&gt;, or &lt;code&gt;PASSED_WITH_EXCEPTION&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.post_sale_authentication_program import PostSaleAuthenticationProgram

# TODO update the JSON string below
json = "{}"
# create an instance of PostSaleAuthenticationProgram from a JSON string
post_sale_authentication_program_instance = PostSaleAuthenticationProgram.from_json(json)
# print the JSON string representation of the object
print(PostSaleAuthenticationProgram.to_json())

# convert the object into a dict
post_sale_authentication_program_dict = post_sale_authentication_program_instance.to_dict()
# create an instance of PostSaleAuthenticationProgram from a dict
post_sale_authentication_program_from_dict = PostSaleAuthenticationProgram.from_dict(post_sale_authentication_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


