# GetSpamComplaints200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetSpamComplaints200ResponseDaysInner]**](GetSpamComplaints200ResponseDaysInner.md) |  | [optional] 
**spam_complaint** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_spam_complaints200_response import GetSpamComplaints200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSpamComplaints200Response from a JSON string
get_spam_complaints200_response_instance = GetSpamComplaints200Response.from_json(json)
# print the JSON string representation of the object
print(GetSpamComplaints200Response.to_json())

# convert the object into a dict
get_spam_complaints200_response_dict = get_spam_complaints200_response_instance.to_dict()
# create an instance of GetSpamComplaints200Response from a dict
get_spam_complaints200_response_from_dict = GetSpamComplaints200Response.from_dict(get_spam_complaints200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


