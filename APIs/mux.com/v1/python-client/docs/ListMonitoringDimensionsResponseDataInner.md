# ListMonitoringDimensionsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_monitoring_dimensions_response_data_inner import ListMonitoringDimensionsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListMonitoringDimensionsResponseDataInner from a JSON string
list_monitoring_dimensions_response_data_inner_instance = ListMonitoringDimensionsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListMonitoringDimensionsResponseDataInner.to_json())

# convert the object into a dict
list_monitoring_dimensions_response_data_inner_dict = list_monitoring_dimensions_response_data_inner_instance.to_dict()
# create an instance of ListMonitoringDimensionsResponseDataInner from a dict
list_monitoring_dimensions_response_data_inner_from_dict = ListMonitoringDimensionsResponseDataInner.from_dict(list_monitoring_dimensions_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


