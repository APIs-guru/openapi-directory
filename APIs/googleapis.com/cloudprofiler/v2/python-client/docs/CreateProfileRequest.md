# CreateProfileRequest

CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**Deployment**](Deployment.md) |  | [optional] 
**profile_type** | **List[str]** | One or more profile types that the agent is capable of providing. | [optional] 

## Example

```python
from openapi_client.models.create_profile_request import CreateProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProfileRequest from a JSON string
create_profile_request_instance = CreateProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProfileRequest.to_json())

# convert the object into a dict
create_profile_request_dict = create_profile_request_instance.to_dict()
# create an instance of CreateProfileRequest from a dict
create_profile_request_from_dict = CreateProfileRequest.from_dict(create_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


