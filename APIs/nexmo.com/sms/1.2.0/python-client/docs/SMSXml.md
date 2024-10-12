# SMSXml

Message sent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[Message]**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.sms_xml import SMSXml

# TODO update the JSON string below
json = "{}"
# create an instance of SMSXml from a JSON string
sms_xml_instance = SMSXml.from_json(json)
# print the JSON string representation of the object
print(SMSXml.to_json())

# convert the object into a dict
sms_xml_dict = sms_xml_instance.to_dict()
# create an instance of SMSXml from a dict
sms_xml_from_dict = SMSXml.from_dict(sms_xml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


