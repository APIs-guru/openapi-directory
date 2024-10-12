# ListReports400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_reports400_response import ListReports400Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListReports400Response from a JSON string
list_reports400_response_instance = ListReports400Response.from_json(json)
# print the JSON string representation of the object
print(ListReports400Response.to_json())

# convert the object into a dict
list_reports400_response_dict = list_reports400_response_instance.to_dict()
# create an instance of ListReports400Response from a dict
list_reports400_response_from_dict = ListReports400Response.from_dict(list_reports400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


