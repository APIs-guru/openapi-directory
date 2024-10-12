# UpdateServiceDescription

The description of the update service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | **int** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 

## Example

```python
from openapi_client.models.update_service_description import UpdateServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateServiceDescription from a JSON string
update_service_description_instance = UpdateServiceDescription.from_json(json)
# print the JSON string representation of the object
print(UpdateServiceDescription.to_json())

# convert the object into a dict
update_service_description_dict = update_service_description_instance.to_dict()
# create an instance of UpdateServiceDescription from a dict
update_service_description_from_dict = UpdateServiceDescription.from_dict(update_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


