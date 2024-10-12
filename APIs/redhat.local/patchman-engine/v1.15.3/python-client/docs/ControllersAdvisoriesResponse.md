# ControllersAdvisoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersAdvisoryItem]**](ControllersAdvisoryItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisories_response import ControllersAdvisoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoriesResponse from a JSON string
controllers_advisories_response_instance = ControllersAdvisoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoriesResponse.to_json())

# convert the object into a dict
controllers_advisories_response_dict = controllers_advisories_response_instance.to_dict()
# create an instance of ControllersAdvisoriesResponse from a dict
controllers_advisories_response_from_dict = ControllersAdvisoriesResponse.from_dict(controllers_advisories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


