# Sample3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.  | [optional] 
**email** | **str** | The email address of the user record you want to create | [optional] 
**name** | **str** | The name of the user record you want to create | [optional] 
**read_only** | **bool** | Not used in this version of the API. For future use. | [optional] 

## Example

```python
from openapi_client.models.sample3 import Sample3

# TODO update the JSON string below
json = "{}"
# create an instance of Sample3 from a JSON string
sample3_instance = Sample3.from_json(json)
# print the JSON string representation of the object
print(Sample3.to_json())

# convert the object into a dict
sample3_dict = sample3_instance.to_dict()
# create an instance of Sample3 from a dict
sample3_from_dict = Sample3.from_dict(sample3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


