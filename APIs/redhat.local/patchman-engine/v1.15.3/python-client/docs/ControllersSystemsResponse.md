# ControllersSystemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersSystemItem]**](ControllersSystemItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_systems_response import ControllersSystemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemsResponse from a JSON string
controllers_systems_response_instance = ControllersSystemsResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemsResponse.to_json())

# convert the object into a dict
controllers_systems_response_dict = controllers_systems_response_instance.to_dict()
# create an instance of ControllersSystemsResponse from a dict
controllers_systems_response_from_dict = ControllersSystemsResponse.from_dict(controllers_systems_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


