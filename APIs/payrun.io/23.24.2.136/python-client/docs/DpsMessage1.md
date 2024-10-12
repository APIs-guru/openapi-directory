# DpsMessage1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_type** | **str** | The dps messages&#39; form type | [optional] 
**issue_date** | **date** | The dps messages&#39; issue date | [optional] 
**last_updated** | **datetime** | The dps messages&#39; last updated | [optional] 
**message** | **str** | The dps messages&#39; message | [optional] 
**message_status** | **str** | The dps messages&#39; message status | [optional] 
**message_type** | **str** | The dps messages&#39; message type | [optional] 
**processing_result** | **str** | The dps messages&#39; processing result | [optional] 
**retrieve_date** | **datetime** | The dps messages&#39; retrieve date | [optional] 
**sequence_number** | **int** | The dps messages&#39; sequence number | [optional] 

## Example

```python
from openapi_client.models.dps_message1 import DpsMessage1

# TODO update the JSON string below
json = "{}"
# create an instance of DpsMessage1 from a JSON string
dps_message1_instance = DpsMessage1.from_json(json)
# print the JSON string representation of the object
print(DpsMessage1.to_json())

# convert the object into a dict
dps_message1_dict = dps_message1_instance.to_dict()
# create an instance of DpsMessage1 from a dict
dps_message1_from_dict = DpsMessage1.from_dict(dps_message1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


