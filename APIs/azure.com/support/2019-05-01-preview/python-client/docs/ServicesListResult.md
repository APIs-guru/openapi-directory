# ServicesListResult

Collection of Service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Service]**](Service.md) | List of Service resources | [optional] 

## Example

```python
from openapi_client.models.services_list_result import ServicesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesListResult from a JSON string
services_list_result_instance = ServicesListResult.from_json(json)
# print the JSON string representation of the object
print(ServicesListResult.to_json())

# convert the object into a dict
services_list_result_dict = services_list_result_instance.to_dict()
# create an instance of ServicesListResult from a dict
services_list_result_from_dict = ServicesListResult.from_dict(services_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


