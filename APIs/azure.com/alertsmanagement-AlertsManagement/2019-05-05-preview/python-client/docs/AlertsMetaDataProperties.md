# AlertsMetaDataProperties

alert meta data property bag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_identifier** | **str** | Identification of the information to be retrieved by API call | 

## Example

```python
from openapi_client.models.alerts_meta_data_properties import AlertsMetaDataProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsMetaDataProperties from a JSON string
alerts_meta_data_properties_instance = AlertsMetaDataProperties.from_json(json)
# print the JSON string representation of the object
print(AlertsMetaDataProperties.to_json())

# convert the object into a dict
alerts_meta_data_properties_dict = alerts_meta_data_properties_instance.to_dict()
# create an instance of AlertsMetaDataProperties from a dict
alerts_meta_data_properties_from_dict = AlertsMetaDataProperties.from_dict(alerts_meta_data_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


