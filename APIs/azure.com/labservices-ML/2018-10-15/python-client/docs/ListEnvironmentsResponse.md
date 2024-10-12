# ListEnvironmentsResponse

Represents the list of environments owned by a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[EnvironmentDetails]**](EnvironmentDetails.md) | List of all the environments | [optional] 

## Example

```python
from openapi_client.models.list_environments_response import ListEnvironmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnvironmentsResponse from a JSON string
list_environments_response_instance = ListEnvironmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEnvironmentsResponse.to_json())

# convert the object into a dict
list_environments_response_dict = list_environments_response_instance.to_dict()
# create an instance of ListEnvironmentsResponse from a dict
list_environments_response_from_dict = ListEnvironmentsResponse.from_dict(list_environments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


