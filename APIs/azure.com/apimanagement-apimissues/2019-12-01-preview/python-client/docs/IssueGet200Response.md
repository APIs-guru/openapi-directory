# IssueGet200Response

Issue Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IssueListByService200ResponseValueInnerProperties**](IssueListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_get200_response import IssueGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IssueGet200Response from a JSON string
issue_get200_response_instance = IssueGet200Response.from_json(json)
# print the JSON string representation of the object
print(IssueGet200Response.to_json())

# convert the object into a dict
issue_get200_response_dict = issue_get200_response_instance.to_dict()
# create an instance of IssueGet200Response from a dict
issue_get200_response_from_dict = IssueGet200Response.from_dict(issue_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


