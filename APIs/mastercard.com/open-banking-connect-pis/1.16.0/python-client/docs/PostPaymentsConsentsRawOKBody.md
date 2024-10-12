# PostPaymentsConsentsRawOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_request_info** | [**PostPaymentsConsentsRawOKBodyOriginalRequestInfo**](PostPaymentsConsentsRawOKBodyOriginalRequestInfo.md) |  | 
**raw_consent** | **str** | Raw Consent | [optional] 

## Example

```python
from openapi_client.models.post_payments_consents_raw_ok_body import PostPaymentsConsentsRawOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsConsentsRawOKBody from a JSON string
post_payments_consents_raw_ok_body_instance = PostPaymentsConsentsRawOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsConsentsRawOKBody.to_json())

# convert the object into a dict
post_payments_consents_raw_ok_body_dict = post_payments_consents_raw_ok_body_instance.to_dict()
# create an instance of PostPaymentsConsentsRawOKBody from a dict
post_payments_consents_raw_ok_body_from_dict = PostPaymentsConsentsRawOKBody.from_dict(post_payments_consents_raw_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


