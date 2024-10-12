# DisputeSummaryResponse

This type defines the base response payload of the <strong>getPaymentDisputeSummaries</strong> method. Each payment dispute that matches the input criteria is returned under the <strong>paymentDisputeSummaries</strong> array.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the &lt;strong&gt;getPaymentDisputeSummaries&lt;/strong&gt; call request that produced the current page of the result set. | [optional] 
**limit** | **int** | This value shows the maximum number of payment disputes that will appear on one page of the result set. The &lt;strong&gt;limit&lt;/strong&gt; value can be passed in as a query parameter in the request, or if it is not used, it defaults to &lt;code&gt;200&lt;/code&gt;. If the value in the &lt;strong&gt;total&lt;/strong&gt; field exceeds this &lt;strong&gt;limit&lt;/strong&gt; value, there are multiple pages in the current result set.&lt;br&gt;&lt;br&gt;&lt;b&gt;Min&lt;/b&gt;: 1; &lt;b&gt;Max&lt;/b&gt;: 200; &lt;b&gt;Default&lt;/b&gt;: 200 | [optional] 
**next** | **str** | The &lt;strong&gt;getPaymentDisputeSummaries&lt;/strong&gt; call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 11 thru 20 from the collection of payment disputes:&lt;br&gt;&lt;br&gt;&lt;code&gt;path/payment_dispute_summary?limit&#x3D;10&amp;offset&#x3D;10&lt;/code&gt;&lt;br&gt;&lt;br&gt;This field is only returned if there is a next page of results to view based on the current input criteria. | [optional] 
**offset** | **int** | This integer value indicates the number of payment disputes skipped before listing the first payment dispute from the result set. The &lt;strong&gt;offset&lt;/strong&gt; value can be passed in as a query parameter in the request, or if it is not used, it defaults to &lt;code&gt;0&lt;/code&gt; and the first payment dispute of the result set is shown at the top of the response. | [optional] 
**payment_dispute_summaries** | [**List[PaymentDisputeSummary]**](PaymentDisputeSummary.md) | Each payment dispute that matches the input criteria is returned under this array. If no payment disputes are found, an empty array is returned. | [optional] 
**prev** | **str** | The &lt;strong&gt;getPaymentDisputeSummaries&lt;/strong&gt; call URI to use if you wish to view the previous page of the result set. For example, the following URI returns records 1 thru 10 from the collection of payment disputes:&lt;br&gt;&lt;br&gt;&lt;code&gt;path/payment_dispute_summary?limit&#x3D;10&amp;offset&#x3D;0&lt;/code&gt;&lt;br&gt;&lt;br&gt;This field is only returned if there is a previous page of results to view based on the current input criteria. | [optional] 
**total** | **int** | This integer value is the total number of payment disputes that matched the input criteria. If the total number of entries exceeds the value that was set for &lt;strong&gt;limit&lt;/strong&gt; in the request payload, you will have to make multiple API calls to see all pages of the results set. This field is returned even if it is &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.dispute_summary_response import DisputeSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeSummaryResponse from a JSON string
dispute_summary_response_instance = DisputeSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(DisputeSummaryResponse.to_json())

# convert the object into a dict
dispute_summary_response_dict = dispute_summary_response_instance.to_dict()
# create an instance of DisputeSummaryResponse from a dict
dispute_summary_response_from_dict = DisputeSummaryResponse.from_dict(dispute_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


