# EndpointGetAppsID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[App]**](App.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_apps_id import EndpointGetAppsID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetAppsID from a JSON string
endpoint_get_apps_id_instance = EndpointGetAppsID.from_json(json)
# print the JSON string representation of the object
print(EndpointGetAppsID.to_json())

# convert the object into a dict
endpoint_get_apps_id_dict = endpoint_get_apps_id_instance.to_dict()
# create an instance of EndpointGetAppsID from a dict
endpoint_get_apps_id_from_dict = EndpointGetAppsID.from_dict(endpoint_get_apps_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


