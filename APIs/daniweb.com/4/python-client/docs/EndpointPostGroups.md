# EndpointPostGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Group**](Group.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups import EndpointPostGroups

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroups from a JSON string
endpoint_post_groups_instance = EndpointPostGroups.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroups.to_json())

# convert the object into a dict
endpoint_post_groups_dict = endpoint_post_groups_instance.to_dict()
# create an instance of EndpointPostGroups from a dict
endpoint_post_groups_from_dict = EndpointPostGroups.from_dict(endpoint_post_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


