# Consortium

Consortium payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the blockchain member name. | [optional] 
**protocol** | **str** | Gets or sets the protocol for the consortium. | [optional] 

## Example

```python
from openapi_client.models.consortium import Consortium

# TODO update the JSON string below
json = "{}"
# create an instance of Consortium from a JSON string
consortium_instance = Consortium.from_json(json)
# print the JSON string representation of the object
print(Consortium.to_json())

# convert the object into a dict
consortium_dict = consortium_instance.to_dict()
# create an instance of Consortium from a dict
consortium_from_dict = Consortium.from_dict(consortium_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


