# ListScansResponse

Response method from the ListScans method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**scans** | [**List[Scan]**](Scan.md) | Available scans based on the list query parameters. | [optional] 

## Example

```python
from openapi_client.models.list_scans_response import ListScansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScansResponse from a JSON string
list_scans_response_instance = ListScansResponse.from_json(json)
# print the JSON string representation of the object
print(ListScansResponse.to_json())

# convert the object into a dict
list_scans_response_dict = list_scans_response_instance.to_dict()
# create an instance of ListScansResponse from a dict
list_scans_response_from_dict = ListScansResponse.from_dict(list_scans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


