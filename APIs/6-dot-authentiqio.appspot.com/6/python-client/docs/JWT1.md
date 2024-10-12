# JWT1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exp** | **int** |  | [optional] 
**var_field** | **str** |  | [optional] 
**sub** | **str** | base64safe encoded public signing key | [optional] 

## Example

```python
from openapi_client.models.jwt1 import JWT1

# TODO update the JSON string below
json = "{}"
# create an instance of JWT1 from a JSON string
jwt1_instance = JWT1.from_json(json)
# print the JSON string representation of the object
print(JWT1.to_json())

# convert the object into a dict
jwt1_dict = jwt1_instance.to_dict()
# create an instance of JWT1 from a dict
jwt1_from_dict = JWT1.from_dict(jwt1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


