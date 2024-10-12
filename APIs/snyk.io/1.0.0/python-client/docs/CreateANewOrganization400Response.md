# CreateANewOrganization400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_ref** | **str** | [UUID] An error ref to contact Snyk with | [optional] 
**message** | **str** | The error message | [optional] 

## Example

```python
from openapi_client.models.create_a_new_organization400_response import CreateANewOrganization400Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateANewOrganization400Response from a JSON string
create_a_new_organization400_response_instance = CreateANewOrganization400Response.from_json(json)
# print the JSON string representation of the object
print(CreateANewOrganization400Response.to_json())

# convert the object into a dict
create_a_new_organization400_response_dict = create_a_new_organization400_response_instance.to_dict()
# create an instance of CreateANewOrganization400Response from a dict
create_a_new_organization400_response_from_dict = CreateANewOrganization400Response.from_dict(create_a_new_organization400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


