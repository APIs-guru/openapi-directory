# Logo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.logo import Logo

# TODO update the JSON string below
json = "{}"
# create an instance of Logo from a JSON string
logo_instance = Logo.from_json(json)
# print the JSON string representation of the object
print(Logo.to_json())

# convert the object into a dict
logo_dict = logo_instance.to_dict()
# create an instance of Logo from a dict
logo_from_dict = Logo.from_dict(logo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


