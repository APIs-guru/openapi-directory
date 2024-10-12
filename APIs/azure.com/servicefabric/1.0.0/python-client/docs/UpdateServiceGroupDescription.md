# UpdateServiceGroupDescription

The description of the update service group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | **int** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 

## Example

```python
from openapi_client.models.update_service_group_description import UpdateServiceGroupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateServiceGroupDescription from a JSON string
update_service_group_description_instance = UpdateServiceGroupDescription.from_json(json)
# print the JSON string representation of the object
print(UpdateServiceGroupDescription.to_json())

# convert the object into a dict
update_service_group_description_dict = update_service_group_description_instance.to_dict()
# create an instance of UpdateServiceGroupDescription from a dict
update_service_group_description_from_dict = UpdateServiceGroupDescription.from_dict(update_service_group_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


