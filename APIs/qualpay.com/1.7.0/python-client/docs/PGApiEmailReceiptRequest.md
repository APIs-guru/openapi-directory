# PGApiEmailReceiptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_id** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Use to indicate which company developed the integration to Qualpay or the name of the payment solution that is connected to Qualpay.  Suggested usage is softwareABCv1.0 or companyXYZv2.0.  | [optional] 
**email_address** | **List[str]** |  AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;An array of email addresses to which the transaction receipt should be sent to.  | 
**logo_url** | **str** |  AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;A link to the logo image that will be included in the transaction receipt.  | [optional] 
**merchant_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Unique identifier on the Qualpay system. | 
**vendor_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Identifies the vendor to which this email receipt request applies. | [optional] 

## Example

```python
from openapi_client.models.pg_api_email_receipt_request import PGApiEmailReceiptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PGApiEmailReceiptRequest from a JSON string
pg_api_email_receipt_request_instance = PGApiEmailReceiptRequest.from_json(json)
# print the JSON string representation of the object
print(PGApiEmailReceiptRequest.to_json())

# convert the object into a dict
pg_api_email_receipt_request_dict = pg_api_email_receipt_request_instance.to_dict()
# create an instance of PGApiEmailReceiptRequest from a dict
pg_api_email_receipt_request_from_dict = PGApiEmailReceiptRequest.from_dict(pg_api_email_receipt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


