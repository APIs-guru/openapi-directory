# ListReports401Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_reports401_response import ListReports401Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListReports401Response from a JSON string
list_reports401_response_instance = ListReports401Response.from_json(json)
# print the JSON string representation of the object
print(ListReports401Response.to_json())

# convert the object into a dict
list_reports401_response_dict = list_reports401_response_instance.to_dict()
# create an instance of ListReports401Response from a dict
list_reports401_response_from_dict = ListReports401Response.from_dict(list_reports401_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


