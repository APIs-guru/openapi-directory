# DataService

Data Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataServiceProperties**](DataServiceProperties.md) |  | 
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_service import DataService

# TODO update the JSON string below
json = "{}"
# create an instance of DataService from a JSON string
data_service_instance = DataService.from_json(json)
# print the JSON string representation of the object
print(DataService.to_json())

# convert the object into a dict
data_service_dict = data_service_instance.to_dict()
# create an instance of DataService from a dict
data_service_from_dict = DataService.from_dict(data_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


