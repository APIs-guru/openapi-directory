# VerifyApiFields

Verify

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network used to send the request. | [optional] 
**product** | [**ProductVerify**](ProductVerify.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.verify_api_fields import VerifyApiFields

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyApiFields from a JSON string
verify_api_fields_instance = VerifyApiFields.from_json(json)
# print the JSON string representation of the object
print(VerifyApiFields.to_json())

# convert the object into a dict
verify_api_fields_dict = verify_api_fields_instance.to_dict()
# create an instance of VerifyApiFields from a dict
verify_api_fields_from_dict = VerifyApiFields.from_dict(verify_api_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


