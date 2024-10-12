# AlertsMetaData

alert meta data information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertsMetaDataProperties**](AlertsMetaDataProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.alerts_meta_data import AlertsMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsMetaData from a JSON string
alerts_meta_data_instance = AlertsMetaData.from_json(json)
# print the JSON string representation of the object
print(AlertsMetaData.to_json())

# convert the object into a dict
alerts_meta_data_dict = alerts_meta_data_instance.to_dict()
# create an instance of AlertsMetaData from a dict
alerts_meta_data_from_dict = AlertsMetaData.from_dict(alerts_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


