# NewBucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of this bucket | 
**team_id** | **str** | Unique identifier for the team to create this bucket for. | 

## Example

```python
from openapi_client.models.new_bucket import NewBucket

# TODO update the JSON string below
json = "{}"
# create an instance of NewBucket from a JSON string
new_bucket_instance = NewBucket.from_json(json)
# print the JSON string representation of the object
print(NewBucket.to_json())

# convert the object into a dict
new_bucket_dict = new_bucket_instance.to_dict()
# create an instance of NewBucket from a dict
new_bucket_from_dict = NewBucket.from_dict(new_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


