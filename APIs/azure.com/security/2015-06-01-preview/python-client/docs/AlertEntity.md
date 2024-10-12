# AlertEntity

Changing set of properties depending on the entity type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of entity | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_entity import AlertEntity

# TODO update the JSON string below
json = "{}"
# create an instance of AlertEntity from a JSON string
alert_entity_instance = AlertEntity.from_json(json)
# print the JSON string representation of the object
print(AlertEntity.to_json())

# convert the object into a dict
alert_entity_dict = alert_entity_instance.to_dict()
# create an instance of AlertEntity from a dict
alert_entity_from_dict = AlertEntity.from_dict(alert_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


