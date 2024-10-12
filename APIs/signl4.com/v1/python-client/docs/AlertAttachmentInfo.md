# AlertAttachmentInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_attachment_info import AlertAttachmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertAttachmentInfo from a JSON string
alert_attachment_info_instance = AlertAttachmentInfo.from_json(json)
# print the JSON string representation of the object
print(AlertAttachmentInfo.to_json())

# convert the object into a dict
alert_attachment_info_dict = alert_attachment_info_instance.to_dict()
# create an instance of AlertAttachmentInfo from a dict
alert_attachment_info_from_dict = AlertAttachmentInfo.from_dict(alert_attachment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


