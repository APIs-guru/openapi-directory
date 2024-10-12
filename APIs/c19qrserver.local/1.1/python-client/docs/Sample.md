# Sample


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_password** | **str** | The old (current) password | [optional] 
**password** | **str** | The new password | [optional] 

## Example

```python
from openapi_client.models.sample import Sample

# TODO update the JSON string below
json = "{}"
# create an instance of Sample from a JSON string
sample_instance = Sample.from_json(json)
# print the JSON string representation of the object
print(Sample.to_json())

# convert the object into a dict
sample_dict = sample_instance.to_dict()
# create an instance of Sample from a dict
sample_from_dict = Sample.from_dict(sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


