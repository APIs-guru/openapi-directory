# PageLogDiagnostics

Page view log (as in screens or activities).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the page.  | 
**session_id** | **str** | Session ID.  | 
**properties** | **Dict[str, str]** | Additional key/value pair parameters.  | [optional] 
**device** | **object** | Device characteristics. | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.page_log_diagnostics import PageLogDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of PageLogDiagnostics from a JSON string
page_log_diagnostics_instance = PageLogDiagnostics.from_json(json)
# print the JSON string representation of the object
print(PageLogDiagnostics.to_json())

# convert the object into a dict
page_log_diagnostics_dict = page_log_diagnostics_instance.to_dict()
# create an instance of PageLogDiagnostics from a dict
page_log_diagnostics_from_dict = PageLogDiagnostics.from_dict(page_log_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


