# ServiceHealthList

Pageable list of service health objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI of the next page. | [optional] 
**value** | [**List[ServiceHealth]**](ServiceHealth.md) | List of service health objects. | [optional] 

## Example

```python
from openapi_client.models.service_health_list import ServiceHealthList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthList from a JSON string
service_health_list_instance = ServiceHealthList.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthList.to_json())

# convert the object into a dict
service_health_list_dict = service_health_list_instance.to_dict()
# create an instance of ServiceHealthList from a dict
service_health_list_from_dict = ServiceHealthList.from_dict(service_health_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


