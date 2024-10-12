# ListContactCentersResponse

Message for response to listing ContactCenters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_centers** | [**List[ContactCenter]**](ContactCenter.md) | The list of ContactCenter | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_contact_centers_response import ListContactCentersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactCentersResponse from a JSON string
list_contact_centers_response_instance = ListContactCentersResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactCentersResponse.to_json())

# convert the object into a dict
list_contact_centers_response_dict = list_contact_centers_response_instance.to_dict()
# create an instance of ListContactCentersResponse from a dict
list_contact_centers_response_from_dict = ListContactCentersResponse.from_dict(list_contact_centers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


