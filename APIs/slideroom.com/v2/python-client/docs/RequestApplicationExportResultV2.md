# RequestApplicationExportResultV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**submissions** | **int** |  | [optional] 
**token** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.request_application_export_result_v2 import RequestApplicationExportResultV2

# TODO update the JSON string below
json = "{}"
# create an instance of RequestApplicationExportResultV2 from a JSON string
request_application_export_result_v2_instance = RequestApplicationExportResultV2.from_json(json)
# print the JSON string representation of the object
print(RequestApplicationExportResultV2.to_json())

# convert the object into a dict
request_application_export_result_v2_dict = request_application_export_result_v2_instance.to_dict()
# create an instance of RequestApplicationExportResultV2 from a dict
request_application_export_result_v2_from_dict = RequestApplicationExportResultV2.from_dict(request_application_export_result_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


