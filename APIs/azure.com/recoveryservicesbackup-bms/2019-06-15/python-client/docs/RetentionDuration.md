# RetentionDuration

Retention duration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of duration types. Retention duration is obtained by the counting the duration type Count times.  For example, when Count &#x3D; 3 and DurationType &#x3D; Weeks, retention duration will be three weeks. | [optional] 
**duration_type** | **str** | Retention duration type of retention policy. | [optional] 

## Example

```python
from openapi_client.models.retention_duration import RetentionDuration

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionDuration from a JSON string
retention_duration_instance = RetentionDuration.from_json(json)
# print the JSON string representation of the object
print(RetentionDuration.to_json())

# convert the object into a dict
retention_duration_dict = retention_duration_instance.to_dict()
# create an instance of RetentionDuration from a dict
retention_duration_from_dict = RetentionDuration.from_dict(retention_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


