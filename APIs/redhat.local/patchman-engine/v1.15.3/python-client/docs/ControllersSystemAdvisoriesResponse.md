# ControllersSystemAdvisoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersSystemAdvisoryItem]**](ControllersSystemAdvisoryItem.md) | advisories items | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_advisories_response import ControllersSystemAdvisoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemAdvisoriesResponse from a JSON string
controllers_system_advisories_response_instance = ControllersSystemAdvisoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemAdvisoriesResponse.to_json())

# convert the object into a dict
controllers_system_advisories_response_dict = controllers_system_advisories_response_instance.to_dict()
# create an instance of ControllersSystemAdvisoriesResponse from a dict
controllers_system_advisories_response_from_dict = ControllersSystemAdvisoriesResponse.from_dict(controllers_system_advisories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


