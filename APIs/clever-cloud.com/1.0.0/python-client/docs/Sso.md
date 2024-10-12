# Sso


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**id** | **str** |  | 
**nav_data** | **str** |  | 
**timestamp** | **date** |  | 
**token** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.sso import Sso

# TODO update the JSON string below
json = "{}"
# create an instance of Sso from a JSON string
sso_instance = Sso.from_json(json)
# print the JSON string representation of the object
print(Sso.to_json())

# convert the object into a dict
sso_dict = sso_instance.to_dict()
# create an instance of Sso from a dict
sso_from_dict = Sso.from_dict(sso_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


