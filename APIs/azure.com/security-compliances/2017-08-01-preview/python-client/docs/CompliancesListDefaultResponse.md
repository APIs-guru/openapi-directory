# CompliancesListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CompliancesListDefaultResponseError**](CompliancesListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.compliances_list_default_response import CompliancesListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompliancesListDefaultResponse from a JSON string
compliances_list_default_response_instance = CompliancesListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CompliancesListDefaultResponse.to_json())

# convert the object into a dict
compliances_list_default_response_dict = compliances_list_default_response_instance.to_dict()
# create an instance of CompliancesListDefaultResponse from a dict
compliances_list_default_response_from_dict = CompliancesListDefaultResponse.from_dict(compliances_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


