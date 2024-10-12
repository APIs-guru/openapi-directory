# ReleaseCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[AnalyticsDistributionReleaseCounts200ResponseCountsInner]**](AnalyticsDistributionReleaseCounts200ResponseCountsInner.md) |  | 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.release_counts import ReleaseCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCounts from a JSON string
release_counts_instance = ReleaseCounts.from_json(json)
# print the JSON string representation of the object
print(ReleaseCounts.to_json())

# convert the object into a dict
release_counts_dict = release_counts_instance.to_dict()
# create an instance of ReleaseCounts from a dict
release_counts_from_dict = ReleaseCounts.from_dict(release_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


