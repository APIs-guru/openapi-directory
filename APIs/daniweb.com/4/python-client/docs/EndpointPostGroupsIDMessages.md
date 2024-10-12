# EndpointPostGroupsIDMessages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GroupMessage]**](GroupMessage.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_id_messages import EndpointPostGroupsIDMessages

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsIDMessages from a JSON string
endpoint_post_groups_id_messages_instance = EndpointPostGroupsIDMessages.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsIDMessages.to_json())

# convert the object into a dict
endpoint_post_groups_id_messages_dict = endpoint_post_groups_id_messages_instance.to_dict()
# create an instance of EndpointPostGroupsIDMessages from a dict
endpoint_post_groups_id_messages_from_dict = EndpointPostGroupsIDMessages.from_dict(endpoint_post_groups_id_messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


