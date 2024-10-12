# UpdateGroupBody

Properties of group update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | For optimistic concurrency control. | [optional] 
**properties** | [**GroupBodyProperties**](GroupBodyProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_group_body import UpdateGroupBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGroupBody from a JSON string
update_group_body_instance = UpdateGroupBody.from_json(json)
# print the JSON string representation of the object
print(UpdateGroupBody.to_json())

# convert the object into a dict
update_group_body_dict = update_group_body_instance.to_dict()
# create an instance of UpdateGroupBody from a dict
update_group_body_from_dict = UpdateGroupBody.from_dict(update_group_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


