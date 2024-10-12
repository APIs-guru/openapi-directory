# ControllersAdvisorySystemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersSystemItem]**](ControllersSystemItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_systems_response import ControllersAdvisorySystemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisorySystemsResponse from a JSON string
controllers_advisory_systems_response_instance = ControllersAdvisorySystemsResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisorySystemsResponse.to_json())

# convert the object into a dict
controllers_advisory_systems_response_dict = controllers_advisory_systems_response_instance.to_dict()
# create an instance of ControllersAdvisorySystemsResponse from a dict
controllers_advisory_systems_response_from_dict = ControllersAdvisorySystemsResponse.from_dict(controllers_advisory_systems_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


