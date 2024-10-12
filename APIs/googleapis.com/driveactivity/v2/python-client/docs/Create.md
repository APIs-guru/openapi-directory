# Create

An object was created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy** | [**Copy**](Copy.md) |  | [optional] 
**new** | **object** | An object was created from scratch. | [optional] 
**upload** | **object** | An object was uploaded into Drive. | [optional] 

## Example

```python
from openapi_client.models.create import Create

# TODO update the JSON string below
json = "{}"
# create an instance of Create from a JSON string
create_instance = Create.from_json(json)
# print the JSON string representation of the object
print(Create.to_json())

# convert the object into a dict
create_dict = create_instance.to_dict()
# create an instance of Create from a dict
create_from_dict = Create.from_dict(create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


