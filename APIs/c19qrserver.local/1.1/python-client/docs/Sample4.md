# Sample4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **str** | The password reset code | [optional] 
**password** | **str** | The new password | [optional] 

## Example

```python
from openapi_client.models.sample4 import Sample4

# TODO update the JSON string below
json = "{}"
# create an instance of Sample4 from a JSON string
sample4_instance = Sample4.from_json(json)
# print the JSON string representation of the object
print(Sample4.to_json())

# convert the object into a dict
sample4_dict = sample4_instance.to_dict()
# create an instance of Sample4 from a dict
sample4_from_dict = Sample4.from_dict(sample4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


