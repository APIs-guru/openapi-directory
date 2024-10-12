# EndpointGetApps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[App]**](App.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_apps import EndpointGetApps

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetApps from a JSON string
endpoint_get_apps_instance = EndpointGetApps.from_json(json)
# print the JSON string representation of the object
print(EndpointGetApps.to_json())

# convert the object into a dict
endpoint_get_apps_dict = endpoint_get_apps_instance.to_dict()
# create an instance of EndpointGetApps from a dict
endpoint_get_apps_from_dict = EndpointGetApps.from_dict(endpoint_get_apps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


