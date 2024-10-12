# StatusData

Status Data from store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | status from store | [optional] 
**storetype** | **str** | store type | [optional] 
**track** | **str** | track information from store | [optional] 
**version** | **str** | version of the app from store | [optional] 

## Example

```python
from openapi_client.models.status_data import StatusData

# TODO update the JSON string below
json = "{}"
# create an instance of StatusData from a JSON string
status_data_instance = StatusData.from_json(json)
# print the JSON string representation of the object
print(StatusData.to_json())

# convert the object into a dict
status_data_dict = status_data_instance.to_dict()
# create an instance of StatusData from a dict
status_data_from_dict = StatusData.from_dict(status_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


