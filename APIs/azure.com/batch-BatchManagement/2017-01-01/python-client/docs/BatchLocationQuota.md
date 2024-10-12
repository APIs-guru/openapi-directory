# BatchLocationQuota

Quotas associated with a Batch region for a particular subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_quota** | **int** | The number of Batch accounts that may be created under the subscription in the specified region. | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_location_quota import BatchLocationQuota

# TODO update the JSON string below
json = "{}"
# create an instance of BatchLocationQuota from a JSON string
batch_location_quota_instance = BatchLocationQuota.from_json(json)
# print the JSON string representation of the object
print(BatchLocationQuota.to_json())

# convert the object into a dict
batch_location_quota_dict = batch_location_quota_instance.to_dict()
# create an instance of BatchLocationQuota from a dict
batch_location_quota_from_dict = BatchLocationQuota.from_dict(batch_location_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


