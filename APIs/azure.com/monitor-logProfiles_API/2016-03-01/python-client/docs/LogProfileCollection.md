# LogProfileCollection

Represents a collection of log profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LogProfileResource]**](LogProfileResource.md) | the values of the log profiles. | 

## Example

```python
from openapi_client.models.log_profile_collection import LogProfileCollection

# TODO update the JSON string below
json = "{}"
# create an instance of LogProfileCollection from a JSON string
log_profile_collection_instance = LogProfileCollection.from_json(json)
# print the JSON string representation of the object
print(LogProfileCollection.to_json())

# convert the object into a dict
log_profile_collection_dict = log_profile_collection_instance.to_dict()
# create an instance of LogProfileCollection from a dict
log_profile_collection_from_dict = LogProfileCollection.from_dict(log_profile_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


