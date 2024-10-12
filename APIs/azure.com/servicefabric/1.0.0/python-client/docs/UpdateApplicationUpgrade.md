# UpdateApplicationUpgrade

The description of the update application upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**name** | **str** |  | [optional] 
**update_description** | [**UpdateDescription**](UpdateDescription.md) |  | [optional] 
**upgrade_kind** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_application_upgrade import UpdateApplicationUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateApplicationUpgrade from a JSON string
update_application_upgrade_instance = UpdateApplicationUpgrade.from_json(json)
# print the JSON string representation of the object
print(UpdateApplicationUpgrade.to_json())

# convert the object into a dict
update_application_upgrade_dict = update_application_upgrade_instance.to_dict()
# create an instance of UpdateApplicationUpgrade from a dict
update_application_upgrade_from_dict = UpdateApplicationUpgrade.from_dict(update_application_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


