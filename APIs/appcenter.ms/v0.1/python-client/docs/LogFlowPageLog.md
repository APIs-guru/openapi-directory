# LogFlowPageLog

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
from openapi_client.models.log_flow_page_log import LogFlowPageLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowPageLog from a JSON string
log_flow_page_log_instance = LogFlowPageLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowPageLog.to_json())

# convert the object into a dict
log_flow_page_log_dict = log_flow_page_log_instance.to_dict()
# create an instance of LogFlowPageLog from a dict
log_flow_page_log_from_dict = LogFlowPageLog.from_dict(log_flow_page_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


