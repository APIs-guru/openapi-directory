# AccountstatusesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#accountstatusesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of account statuses. | [optional] 
**resources** | [**List[AccountStatus]**](AccountStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.accountstatuses_list_response import AccountstatusesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountstatusesListResponse from a JSON string
accountstatuses_list_response_instance = AccountstatusesListResponse.from_json(json)
# print the JSON string representation of the object
print(AccountstatusesListResponse.to_json())

# convert the object into a dict
accountstatuses_list_response_dict = accountstatuses_list_response_instance.to_dict()
# create an instance of AccountstatusesListResponse from a dict
accountstatuses_list_response_from_dict = AccountstatusesListResponse.from_dict(accountstatuses_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


