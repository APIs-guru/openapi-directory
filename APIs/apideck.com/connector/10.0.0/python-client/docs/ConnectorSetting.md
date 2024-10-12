# ConnectorSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.connector_setting import ConnectorSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorSetting from a JSON string
connector_setting_instance = ConnectorSetting.from_json(json)
# print the JSON string representation of the object
print(ConnectorSetting.to_json())

# convert the object into a dict
connector_setting_dict = connector_setting_instance.to_dict()
# create an instance of ConnectorSetting from a dict
connector_setting_from_dict = ConnectorSetting.from_dict(connector_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


