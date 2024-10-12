# BatchGetContactGroupsResponse

The response to a batch get contact groups request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[ContactGroupResponse]**](ContactGroupResponse.md) | The list of responses for each requested contact group resource. | [optional] 

## Example

```python
from openapi_client.models.batch_get_contact_groups_response import BatchGetContactGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetContactGroupsResponse from a JSON string
batch_get_contact_groups_response_instance = BatchGetContactGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetContactGroupsResponse.to_json())

# convert the object into a dict
batch_get_contact_groups_response_dict = batch_get_contact_groups_response_instance.to_dict()
# create an instance of BatchGetContactGroupsResponse from a dict
batch_get_contact_groups_response_from_dict = BatchGetContactGroupsResponse.from_dict(batch_get_contact_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


