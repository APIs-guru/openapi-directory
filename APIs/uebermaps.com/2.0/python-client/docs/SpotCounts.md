# SpotCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | **int** |  | [optional] 
**comments** | **int** |  | [optional] 
**respot** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.spot_counts import SpotCounts

# TODO update the JSON string below
json = "{}"
# create an instance of SpotCounts from a JSON string
spot_counts_instance = SpotCounts.from_json(json)
# print the JSON string representation of the object
print(SpotCounts.to_json())

# convert the object into a dict
spot_counts_dict = spot_counts_instance.to_dict()
# create an instance of SpotCounts from a dict
spot_counts_from_dict = SpotCounts.from_dict(spot_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


