# MetadatabaseStatus

The status of the metadatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**HealthStatus**](HealthStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.metadatabase_status import MetadatabaseStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MetadatabaseStatus from a JSON string
metadatabase_status_instance = MetadatabaseStatus.from_json(json)
# print the JSON string representation of the object
print(MetadatabaseStatus.to_json())

# convert the object into a dict
metadatabase_status_dict = metadatabase_status_instance.to_dict()
# create an instance of MetadatabaseStatus from a dict
metadatabase_status_from_dict = MetadatabaseStatus.from_dict(metadatabase_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


