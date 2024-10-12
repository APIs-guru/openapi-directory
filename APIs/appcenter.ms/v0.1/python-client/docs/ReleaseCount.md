# ReleaseCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group** | **str** | Distribution group queried.  | [optional] 
**release_id** | **str** |  | 
**total_count** | **int** | Total count of downloads.  | 
**unique_count** | **int** | Count of unique downloads against user id.  | 

## Example

```python
from openapi_client.models.release_count import ReleaseCount

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCount from a JSON string
release_count_instance = ReleaseCount.from_json(json)
# print the JSON string representation of the object
print(ReleaseCount.to_json())

# convert the object into a dict
release_count_dict = release_count_instance.to_dict()
# create an instance of ReleaseCount from a dict
release_count_from_dict = ReleaseCount.from_dict(release_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


