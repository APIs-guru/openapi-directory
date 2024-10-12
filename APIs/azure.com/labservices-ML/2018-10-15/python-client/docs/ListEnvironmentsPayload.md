# ListEnvironmentsPayload

Represents the payload to list environments owned by a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_id** | **str** | The resource Id of the lab | [optional] 

## Example

```python
from openapi_client.models.list_environments_payload import ListEnvironmentsPayload

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnvironmentsPayload from a JSON string
list_environments_payload_instance = ListEnvironmentsPayload.from_json(json)
# print the JSON string representation of the object
print(ListEnvironmentsPayload.to_json())

# convert the object into a dict
list_environments_payload_dict = list_environments_payload_instance.to_dict()
# create an instance of ListEnvironmentsPayload from a dict
list_environments_payload_from_dict = ListEnvironmentsPayload.from_dict(list_environments_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


