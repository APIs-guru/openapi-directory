# ControllersSystemsAdvisoriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisories** | **List[str]** |  | [optional] 
**systems** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_systems_advisories_request import ControllersSystemsAdvisoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemsAdvisoriesRequest from a JSON string
controllers_systems_advisories_request_instance = ControllersSystemsAdvisoriesRequest.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemsAdvisoriesRequest.to_json())

# convert the object into a dict
controllers_systems_advisories_request_dict = controllers_systems_advisories_request_instance.to_dict()
# create an instance of ControllersSystemsAdvisoriesRequest from a dict
controllers_systems_advisories_request_from_dict = ControllersSystemsAdvisoriesRequest.from_dict(controllers_systems_advisories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


