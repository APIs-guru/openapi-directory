# Owner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the owner | [optional] [readonly] 
**id** | **str** | ID of the owner | [optional] [readonly] 
**name** | **str** | Name of the owner | [optional] [readonly] 

## Example

```python
from openapi_client.models.owner import Owner

# TODO update the JSON string below
json = "{}"
# create an instance of Owner from a JSON string
owner_instance = Owner.from_json(json)
# print the JSON string representation of the object
print(Owner.to_json())

# convert the object into a dict
owner_dict = owner_instance.to_dict()
# create an instance of Owner from a dict
owner_from_dict = Owner.from_dict(owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


