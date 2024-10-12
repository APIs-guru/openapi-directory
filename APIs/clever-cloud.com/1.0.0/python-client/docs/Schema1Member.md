# Schema1Member


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar** | **str** |  | [optional] 
**email** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.schema1_member import Schema1Member

# TODO update the JSON string below
json = "{}"
# create an instance of Schema1Member from a JSON string
schema1_member_instance = Schema1Member.from_json(json)
# print the JSON string representation of the object
print(Schema1Member.to_json())

# convert the object into a dict
schema1_member_dict = schema1_member_instance.to_dict()
# create an instance of Schema1Member from a dict
schema1_member_from_dict = Schema1Member.from_dict(schema1_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


