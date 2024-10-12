# PostPaymentsConsentsRawParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_info** | [**PostPaymentsConsentsRawParamsBodyRequestInfo**](PostPaymentsConsentsRawParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_consents_raw_params_body import PostPaymentsConsentsRawParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsConsentsRawParamsBody from a JSON string
post_payments_consents_raw_params_body_instance = PostPaymentsConsentsRawParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsConsentsRawParamsBody.to_json())

# convert the object into a dict
post_payments_consents_raw_params_body_dict = post_payments_consents_raw_params_body_instance.to_dict()
# create an instance of PostPaymentsConsentsRawParamsBody from a dict
post_payments_consents_raw_params_body_from_dict = PostPaymentsConsentsRawParamsBody.from_dict(post_payments_consents_raw_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


