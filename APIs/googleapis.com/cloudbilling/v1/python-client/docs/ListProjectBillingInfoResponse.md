# ListProjectBillingInfoResponse

Request message for `ListProjectBillingInfoResponse`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. To retrieve the next page, call &#x60;ListProjectBillingInfo&#x60; again with the &#x60;page_token&#x60; field set to this value. This field is empty if there are no more results to retrieve. | [optional] 
**project_billing_info** | [**List[ProjectBillingInfo]**](ProjectBillingInfo.md) | A list of &#x60;ProjectBillingInfo&#x60; resources representing the projects associated with the billing account. | [optional] 

## Example

```python
from openapi_client.models.list_project_billing_info_response import ListProjectBillingInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProjectBillingInfoResponse from a JSON string
list_project_billing_info_response_instance = ListProjectBillingInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ListProjectBillingInfoResponse.to_json())

# convert the object into a dict
list_project_billing_info_response_dict = list_project_billing_info_response_instance.to_dict()
# create an instance of ListProjectBillingInfoResponse from a dict
list_project_billing_info_response_from_dict = ListProjectBillingInfoResponse.from_dict(list_project_billing_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


