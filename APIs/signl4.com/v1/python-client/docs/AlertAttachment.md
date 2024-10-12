# AlertAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**encoding** | [**Encoding**](Encoding.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_attachment import AlertAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of AlertAttachment from a JSON string
alert_attachment_instance = AlertAttachment.from_json(json)
# print the JSON string representation of the object
print(AlertAttachment.to_json())

# convert the object into a dict
alert_attachment_dict = alert_attachment_instance.to_dict()
# create an instance of AlertAttachment from a dict
alert_attachment_from_dict = AlertAttachment.from_dict(alert_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


