# GroupRequest

Request body for group request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_ids** | **List[str]** | Array of candidate faceId created by Face - Detect. The maximum is 1000 faces | 

## Example

```python
from openapi_client.models.group_request import GroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRequest from a JSON string
group_request_instance = GroupRequest.from_json(json)
# print the JSON string representation of the object
print(GroupRequest.to_json())

# convert the object into a dict
group_request_dict = group_request_instance.to_dict()
# create an instance of GroupRequest from a dict
group_request_from_dict = GroupRequest.from_dict(group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


