# EmailResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catchall** | **bool** | Catch-all status is not known | 
**deliverable** | **bool** | Deliverability is not known | 
**disposable** | **bool** | Disposability is not known | 
**free** | **bool** | Free email provider is not known | 
**result** | **str** |  | 
**role** | **bool** | Role is not known | 

## Example

```python
from openapi_client.models.email_response_result import EmailResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of EmailResponseResult from a JSON string
email_response_result_instance = EmailResponseResult.from_json(json)
# print the JSON string representation of the object
print(EmailResponseResult.to_json())

# convert the object into a dict
email_response_result_dict = email_response_result_instance.to_dict()
# create an instance of EmailResponseResult from a dict
email_response_result_from_dict = EmailResponseResult.from_dict(email_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


