# GoogleServiceAccount

Google service account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_email** | **str** | Email address of the service account. | [optional] 
**subject_id** | **str** | Unique identifier for the service account. | [optional] 

## Example

```python
from openapi_client.models.google_service_account import GoogleServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleServiceAccount from a JSON string
google_service_account_instance = GoogleServiceAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleServiceAccount.to_json())

# convert the object into a dict
google_service_account_dict = google_service_account_instance.to_dict()
# create an instance of GoogleServiceAccount from a dict
google_service_account_from_dict = GoogleServiceAccount.from_dict(google_service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


