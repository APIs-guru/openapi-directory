# EvidenceRequest

This type is used by the <strong>evidenceRequests</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are being requested to help resolve the payment dispute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evidence_id** | **str** | Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set. | [optional] 
**evidence_type** | **str** | This enumeration value shows the type of evidential document provided. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**line_items** | [**List[OrderLineItems]**](OrderLineItems.md) | This array shows one or more order line items associated with the evidential document that has been provided. | [optional] 
**request_date** | **str** | The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. &lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**respond_by_date** | **str** | The timestamp in this field shows the date/time when the seller is expected to provide a requested evidential document to eBay.  &lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.evidence_request import EvidenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EvidenceRequest from a JSON string
evidence_request_instance = EvidenceRequest.from_json(json)
# print the JSON string representation of the object
print(EvidenceRequest.to_json())

# convert the object into a dict
evidence_request_dict = evidence_request_instance.to_dict()
# create an instance of EvidenceRequest from a dict
evidence_request_from_dict = EvidenceRequest.from_dict(evidence_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


