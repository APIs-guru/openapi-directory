# UpdateHistoryProperty

An update history of the ImmutabilityPolicy of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**immutability_period_since_creation_in_days** | **int** | The immutability period for the blobs in the container since the policy creation, in days. | [optional] [readonly] 
**object_identifier** | **str** | Returns the Object ID of the user who updated the ImmutabilityPolicy. | [optional] [readonly] 
**tenant_id** | **str** | Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy. | [optional] [readonly] 
**timestamp** | **datetime** | Returns the date and time the ImmutabilityPolicy was updated. | [optional] [readonly] 
**update** | **str** | The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend. | [optional] [readonly] 
**upn** | **str** | Returns the User Principal Name of the user who updated the ImmutabilityPolicy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_history_property import UpdateHistoryProperty

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateHistoryProperty from a JSON string
update_history_property_instance = UpdateHistoryProperty.from_json(json)
# print the JSON string representation of the object
print(UpdateHistoryProperty.to_json())

# convert the object into a dict
update_history_property_dict = update_history_property_instance.to_dict()
# create an instance of UpdateHistoryProperty from a dict
update_history_property_from_dict = UpdateHistoryProperty.from_dict(update_history_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


