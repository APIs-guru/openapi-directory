# BucketBySession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_duration_millis** | **str** | Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data. | [optional] 

## Example

```python
from openapi_client.models.bucket_by_session import BucketBySession

# TODO update the JSON string below
json = "{}"
# create an instance of BucketBySession from a JSON string
bucket_by_session_instance = BucketBySession.from_json(json)
# print the JSON string representation of the object
print(BucketBySession.to_json())

# convert the object into a dict
bucket_by_session_dict = bucket_by_session_instance.to_dict()
# create an instance of BucketBySession from a dict
bucket_by_session_from_dict = BucketBySession.from_dict(bucket_by_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


