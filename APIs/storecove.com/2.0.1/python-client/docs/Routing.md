# Routing

The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_without_sending** | **bool** | If you wish to send the document yourself in a Y-flow, use this flag. Wait for the &#39;cleared&#39; webhook and use the &lt;&lt;_openapi_show_document_submission_evidence&gt;&gt; endpoint to retrieve the clearing evidence. This will include a sendable document. | [optional] [default to False]
**e_identifiers** | [**List[RoutingIdentifier]**](RoutingIdentifier.md) | A list of electronic routing identifiers. These are the identifiers used on the Peppol network or for other destinations. | [optional] 
**emails** | **List[str]** | The email addresses the invoice should be sent to if none of the other identifiers can be used | [optional] 

## Example

```python
from openapi_client.models.routing import Routing

# TODO update the JSON string below
json = "{}"
# create an instance of Routing from a JSON string
routing_instance = Routing.from_json(json)
# print the JSON string representation of the object
print(Routing.to_json())

# convert the object into a dict
routing_dict = routing_instance.to_dict()
# create an instance of Routing from a dict
routing_from_dict = Routing.from_dict(routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


