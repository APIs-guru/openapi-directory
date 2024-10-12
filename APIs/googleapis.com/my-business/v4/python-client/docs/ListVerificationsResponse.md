# ListVerificationsResponse

Response message for Verifications.ListVerifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response. | [optional] 
**verifications** | [**List[Verification]**](Verification.md) | List of the verifications. | [optional] 

## Example

```python
from openapi_client.models.list_verifications_response import ListVerificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVerificationsResponse from a JSON string
list_verifications_response_instance = ListVerificationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVerificationsResponse.to_json())

# convert the object into a dict
list_verifications_response_dict = list_verifications_response_instance.to_dict()
# create an instance of ListVerificationsResponse from a dict
list_verifications_response_from_dict = ListVerificationsResponse.from_dict(list_verifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


