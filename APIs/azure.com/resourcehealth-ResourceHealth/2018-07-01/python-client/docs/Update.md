# Update

Update for service health event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **str** | Summary text for the given update for the service health event. | [optional] 
**update_date_time** | **datetime** | It provides the Timestamp for the given update for the service health event. | [optional] 

## Example

```python
from openapi_client.models.update import Update

# TODO update the JSON string below
json = "{}"
# create an instance of Update from a JSON string
update_instance = Update.from_json(json)
# print the JSON string representation of the object
print(Update.to_json())

# convert the object into a dict
update_dict = update_instance.to_dict()
# create an instance of Update from a dict
update_from_dict = Update.from_dict(update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


