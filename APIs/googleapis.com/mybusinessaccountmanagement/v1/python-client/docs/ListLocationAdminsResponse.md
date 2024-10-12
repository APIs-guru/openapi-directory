# ListLocationAdminsResponse

Response message for AccessControl.ListLocationAdmins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins** | [**List[Admin]**](Admin.md) | A collection of Admins. | [optional] 

## Example

```python
from openapi_client.models.list_location_admins_response import ListLocationAdminsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLocationAdminsResponse from a JSON string
list_location_admins_response_instance = ListLocationAdminsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLocationAdminsResponse.to_json())

# convert the object into a dict
list_location_admins_response_dict = list_location_admins_response_instance.to_dict()
# create an instance of ListLocationAdminsResponse from a dict
list_location_admins_response_from_dict = ListLocationAdminsResponse.from_dict(list_location_admins_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


