# CustomField27

Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name to be displayed in the reconciliation report. This value will appear as a header in the reconciliation reports. Name values to be defined during the onboarding process.\\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 40 | [optional] 
**value** | **str** | Value to be displayed in the reconciliation report.\\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 40 | [optional] 

## Example

```python
from openapi_client.models.custom_field27 import CustomField27

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField27 from a JSON string
custom_field27_instance = CustomField27.from_json(json)
# print the JSON string representation of the object
print(CustomField27.to_json())

# convert the object into a dict
custom_field27_dict = custom_field27_instance.to_dict()
# create an instance of CustomField27 from a dict
custom_field27_from_dict = CustomField27.from_dict(custom_field27_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


